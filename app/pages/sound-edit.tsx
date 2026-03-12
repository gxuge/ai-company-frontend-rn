import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

// Assets
const imgArrowLeft = require('../../assets/images/sound-edit/arrow_left.svg');
const imgHeadphone = require('../../assets/images/sound-edit/headphone.png');
const imgEdit = require('../../assets/images/sound-edit/edit.svg');
const imgChevronDown = require('../../assets/images/sound-edit/chevron_down.svg');
const imgPlay = require('../../assets/images/sound-edit/play.svg');
const imgCheckCircle = require('../../assets/images/sound-edit/check_circle.svg');
const imgCircle = require('../../assets/images/sound-edit/circle.svg');

// ===== Types =====
interface VoiceItem {
    id: string;
    name: string;
    emoji: string;
    tags: string[];
}

// ===== Data =====
const VOICE_LIST: VoiceItem[] = [
    { id: '1', name: '李明', emoji: '🧑‍💼', tags: ['新闻', '旁白'] },
    { id: '2', name: '李明', emoji: '🧑‍💼', tags: ['新闻', '旁白'] },
    { id: '3', name: '李明', emoji: '🧑‍💼', tags: ['新闻', '旁白'] },
];

const GENDER_TABS = ['全部', '男', '女'];

// ===== Sub-components =====

function SliderTrack({ value, label, displayValue }: { value: number; label: string; displayValue: string }) {
    const TICK_COUNT = 6;
    const trackWidth = (width - 100) / 2; // half of available width minus paddings
    const thumbPosition = value * (trackWidth - 14);

    return (
        <View style={styles.sliderContainer}>
            <View style={styles.sliderLabelRow}>
                <Text style={styles.sliderLabel}>{label}</Text>
                <Text style={styles.sliderValue}>{displayValue}</Text>
            </View>
            <View style={styles.sliderTrackContainer}>
                {/* Tick marks */}
                <View style={styles.tickContainer}>
                    {Array.from({ length: TICK_COUNT }).map((_, i) => (
                        <View key={i} style={styles.tick} />
                    ))}
                </View>
                {/* Track */}
                <View style={styles.track}>
                    <View style={[styles.thumb, { left: thumbPosition }]} />
                </View>
            </View>
        </View>
    );
}

function VoiceCard({
    item,
    selected,
    onPress,
    showPlay,
}: {
    item: VoiceItem;
    selected: boolean;
    onPress: () => void;
    showPlay?: boolean;
}) {
    return (
        <TouchableOpacity
            style={[styles.voiceCard, selected && styles.voiceCardSelected]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.voiceCardContent}>
                <View style={styles.voiceAvatarContainer}>
                    <View style={styles.voiceAvatar}>
                        <Text style={styles.voiceEmoji}>{item.emoji}</Text>
                    </View>
                    {showPlay && (
                        <View style={styles.playOverlay}>
                            <Image source={imgPlay} style={styles.playOverlayIcon} />
                        </View>
                    )}
                </View>
                <View style={styles.voiceInfo}>
                    <Text style={styles.voiceName}>{item.name}</Text>
                    <View style={styles.tagsRow}>
                        {item.tags.map((tag, i) => (
                            <View key={i} style={styles.tag}>
                                <Text style={styles.tagText}>{tag}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
            <Image
                source={selected ? imgCheckCircle : imgCircle}
                style={styles.radioIcon}
            />
        </TouchableOpacity>
    );
}

// ===== Main Component =====
export default function SoundEdit() {
    const router = useRouter();
    const [selectedGender, setSelectedGender] = useState(0);
    const [selectedVoice, setSelectedVoice] = useState('1');
    const [pitchValue] = useState(0.7); // 0-1 range, roughly +20%
    const [speedValue] = useState(0.4); // 0-1 range, roughly 1.2x

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                        <Image source={imgArrowLeft} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>音色编辑器</Text>
                    <View style={styles.headerRight} />
                </View>

                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    {/* Voice Editor Card */}
                    <View style={styles.editorCard}>
                        {/* Top row: avatar + name + edit button */}
                        <View style={styles.editorTopRow}>
                            <View style={styles.editorProfile}>
                                <View style={styles.editorAvatar}>
                                    <Text style={styles.editorEmoji}>🧑‍💼</Text>
                                </View>
                                <Text style={styles.editorName}>李明</Text>
                            </View>
                            <TouchableOpacity style={styles.editButton}>
                                <Image source={imgEdit} style={styles.editIcon} />
                                <Text style={styles.editButtonText}>读文编辑</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Parameter adjust row */}
                        <View style={styles.paramRow}>
                            <Text style={styles.paramTitle}>参数调整</Text>
                            <TouchableOpacity style={styles.resetButton}>
                                <Text style={styles.resetText}>重置</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Sliders */}
                        <View style={styles.slidersRow}>
                            <SliderTrack value={pitchValue} label="音调" displayValue="+20%" />
                            <SliderTrack value={speedValue} label="语速" displayValue="1.2x" />
                        </View>

                        {/* Preview button */}
                        <TouchableOpacity style={styles.previewButton} activeOpacity={0.7}>
                            <Image source={imgHeadphone} style={styles.previewIcon} />
                            <Text style={styles.previewText}>试听音色</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Recommended Voices Section */}
                    <Text style={styles.sectionTitle}>推荐音色库</Text>

                    {/* Filters */}
                    <View style={styles.filterRow}>
                        <View style={styles.filterLeft}>
                            <Text style={styles.filterLabel}>性别</Text>
                            <View style={styles.genderTabs}>
                                {GENDER_TABS.map((tab, index) => (
                                    <TouchableOpacity
                                        key={tab}
                                        style={[
                                            styles.genderTab,
                                            selectedGender === index && styles.genderTabActive,
                                        ]}
                                        onPress={() => setSelectedGender(index)}
                                    >
                                        <Text
                                            style={[
                                                styles.genderTabText,
                                                selectedGender === index && styles.genderTabTextActive,
                                            ]}
                                        >
                                            {tab}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <View style={styles.filterRight}>
                            <Text style={styles.filterLabel}>年龄</Text>
                            <TouchableOpacity style={styles.ageDropdown}>
                                <Text style={styles.ageDropdownText}>少年</Text>
                                <Image source={imgChevronDown} style={styles.chevronIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Voice List */}
                    {VOICE_LIST.map((item) => (
                        <VoiceCard
                            key={item.id}
                            item={item}
                            selected={selectedVoice === item.id}
                            onPress={() => setSelectedVoice(item.id)}
                            showPlay={selectedVoice === item.id}
                        />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

// ===== Styles =====
const ACCENT = 'rgba(155, 254, 3, 0.9)';
const ACCENT_DIM = 'rgba(155, 254, 3, 0.2)';
const ACCENT_BORDER = 'rgba(155, 254, 3, 0.3)';
const GRAY_TEXT = '#9ca3af';
const DARK_BG = '#0a0a0a';
const CARD_BG = '#161616';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DARK_BG,
    },
    safeArea: {
        flex: 1,
    },
    // === Header ===
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#232322',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        width: 18,
        height: 18,
        tintColor: '#ffffff',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    headerRight: {
        width: 40,
    },
    // === ScrollView ===
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 15,
        paddingBottom: 40,
    },
    // === Editor Card ===
    editorCard: {
        backgroundColor: CARD_BG,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#4c4c4c',
        padding: 18,
        marginTop: 10,
        marginBottom: 25,
        shadowColor: ACCENT,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 20,
    },
    editorTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    editorProfile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editorAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        overflow: 'hidden',
    },
    editorEmoji: {
        fontSize: 16,
    },
    editorName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: ACCENT_DIM,
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: CARD_BG,
    },
    editIcon: {
        width: 14,
        height: 14,
        marginRight: 8,
        tintColor: ACCENT,
    },
    editButtonText: {
        fontSize: 14,
        color: 'rgba(155, 254, 3, 0.8)',
    },
    // === Params Row ===
    paramRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    paramTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: GRAY_TEXT,
        letterSpacing: 0.6,
    },
    resetButton: {
        borderWidth: 1,
        borderColor: ACCENT_BORDER,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    resetText: {
        fontSize: 12,
        color: ACCENT,
    },
    // === Sliders ===
    slidersRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    sliderContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
    sliderLabelRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    sliderLabel: {
        fontSize: 13,
        fontWeight: '500',
        color: GRAY_TEXT,
    },
    sliderValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: ACCENT,
    },
    sliderTrackContainer: {
        height: 20,
        justifyContent: 'center',
    },
    tickContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 6,
        right: 6,
        top: 8,
    },
    tick: {
        width: 2,
        height: 2,
        borderRadius: 1,
        backgroundColor: '#555',
    },
    track: {
        height: 2,
        backgroundColor: '#333',
        borderRadius: 1,
    },
    thumb: {
        position: 'absolute',
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: ACCENT,
        borderWidth: 2,
        borderColor: DARK_BG,
        top: -7,
        shadowColor: ACCENT,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5,
    },
    // === Preview Button ===
    previewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: ACCENT,
    },
    previewIcon: {
        width: 22,
        height: 22,
        marginRight: 10,
    },
    previewText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: ACCENT,
    },
    // === Section Title ===
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GRAY_TEXT,
        letterSpacing: 0.7,
        marginBottom: 15,
        paddingLeft: 5,
    },
    // === Filters ===
    filterRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    filterLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#6b7280',
        marginRight: 10,
    },
    genderTabs: {
        flexDirection: 'row',
        backgroundColor: '#222',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        padding: 4,
    },
    genderTab: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 6,
    },
    genderTabActive: {
        backgroundColor: ACCENT_DIM,
    },
    genderTabText: {
        fontSize: 13,
        fontWeight: '500',
        color: GRAY_TEXT,
    },
    genderTabTextActive: {
        color: '#9bfe03',
    },
    ageDropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: ACCENT_DIM,
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: CARD_BG,
    },
    ageDropdownText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#9bfe03',
        marginRight: 8,
    },
    chevronIcon: {
        width: 10,
        height: 6,
    },
    // === Voice Cards ===
    voiceCard: {
        backgroundColor: CARD_BG,
        borderRadius: 14,
        padding: 14,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    voiceCardSelected: {
        borderWidth: 1,
        borderColor: '#e9fac8',
        shadowColor: ACCENT,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    voiceCardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    voiceAvatarContainer: {
        width: 50,
        height: 50,
        marginRight: 14,
    },
    voiceAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    voiceEmoji: {
        fontSize: 22,
    },
    playOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playOverlayIcon: {
        width: 18,
        height: 18,
    },
    voiceInfo: {
        flex: 1,
    },
    voiceName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 6,
    },
    tagsRow: {
        flexDirection: 'row',
    },
    tag: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 3,
        marginRight: 5,
    },
    tagText: {
        fontSize: 12,
        color: GRAY_TEXT,
    },
    radioIcon: {
        width: 26,
        height: 26,
        marginLeft: 10,
    },
});
