import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useRouter } from 'expo-router';

// ─── Assets ────────────────────────────────────────────────────────────────
const imgArrowLeft    = require('../../assets/images/create-role/arrow_left.svg');
const imgSparkle      = require('../../assets/images/create-role/sparkle.svg');
const imgPlay         = require('../../assets/images/create-role/play.svg');
const imgChevronRight = require('../../assets/images/create-role/chevron_right.svg');

// ─── Colors ────────────────────────────────────────────────────────────────
const ACCENT        = 'rgba(155, 254, 3, 0.9)';
const ACCENT_DIM    = 'rgba(155, 254, 3, 0.2)';
const ACCENT_BORDER = 'rgba(155, 254, 3, 0.2)';
const BORDER_GRAY   = '#494949';
const DARK_TEXT     = '#3b3f34';

// ─── Sub-components ────────────────────────────────────────────────────────

function SectionHeader({
    title,
    required,
    showGenerate,
}: {
    title: string;
    required?: boolean;
    showGenerate?: boolean;
}) {
    return (
        <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
                <Text style={styles.sectionTitle}>{title}</Text>
                {required && <Text style={styles.requiredStar}> *</Text>}
            </View>
            {showGenerate && (
                <TouchableOpacity style={styles.generateBtn}>
                    <Image source={imgSparkle} style={styles.sparkleIcon} />
                    <Text style={styles.generateText}>一键生成</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

function FormField({
    label,
    placeholder,
    required,
    value,
    onChangeText,
}: {
    label: string;
    placeholder: string;
    required?: boolean;
    value: string;
    onChangeText: (text: string) => void;
}) {
    return (
        <View style={styles.formField}>
            <View style={styles.fieldLabelRow}>
                <Text style={styles.fieldLabel}>{label}</Text>
                {required && <Text style={styles.requiredStar}>*</Text>}
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#6b7280"
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function CreateRole() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(1); // 高级设定 is active in design
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [occupation, setOccupation] = useState('');
    const [background, setBackground] = useState('');

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={0}
                >
                    {/* ── Header ── */}
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                            <Image source={imgArrowLeft} style={styles.backIcon} />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>创建角色</Text>
                        <View style={styles.headerSpacer} />
                    </View>

                    {/* ── Tab Switch ── */}
                    <View style={styles.tabContainer}>
                        <TouchableOpacity
                            style={[styles.tabBtn, activeTab === 0 && styles.tabBtnActive]}
                            onPress={() => setActiveTab(0)}
                        >
                            <Text style={[styles.tabText, activeTab === 0 && styles.tabTextActive]}>
                                基础信息
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabBtn, activeTab === 1 && styles.tabBtnActive]}
                            onPress={() => setActiveTab(1)}
                        >
                            <Text style={[styles.tabText, activeTab === 1 && styles.tabTextActive]}>
                                高级设定
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* ── Scrollable Content ── */}
                    <ScrollView
                        style={styles.scrollView}
                        contentContainerStyle={styles.scrollContent}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    >
                        {/* ── Section 1: 角色设定 ── */}
                        <View style={styles.section}>
                            <SectionHeader title="角色设定" required showGenerate />
                            <View style={styles.card}>
                                <FormField
                                    label="角色名字"
                                    placeholder="输入角色名字"
                                    required
                                    value={name}
                                    onChangeText={setName}
                                />
                                <View style={styles.fieldDivider} />
                                <FormField
                                    label="性别"
                                    placeholder="输入角色性别"
                                    value={gender}
                                    onChangeText={setGender}
                                />
                                <View style={styles.fieldDivider} />
                                <FormField
                                    label="职业"
                                    placeholder="输入角色职业"
                                    value={occupation}
                                    onChangeText={setOccupation}
                                />
                            </View>
                        </View>

                        {/* ── Section 2: 角色背景设定 ── */}
                        <View style={styles.section}>
                            <SectionHeader title="角色背景设定" showGenerate />
                            <View style={styles.textareaCard}>
                                <TextInput
                                    style={styles.textarea}
                                    placeholder="输入角色背景故事，可辅助生成人设和剧情。"
                                    placeholderTextColor="#6b7280"
                                    multiline
                                    numberOfLines={6}
                                    textAlignVertical="top"
                                    value={background}
                                    onChangeText={setBackground}
                                />
                            </View>
                        </View>

                        {/* ── Section 3: 角色声音 ── */}
                        <View style={styles.section}>
                            <View style={styles.voiceTitleRow}>
                                <Text style={styles.sectionTitle}>角色声音</Text>
                            </View>
                            <TouchableOpacity style={styles.voiceCard} activeOpacity={0.7}>
                                <Text style={styles.voicePlaceholder}>选择角色声音</Text>
                                <View style={styles.voiceRight}>
                                    <Text style={styles.voiceSelected}>温柔男声</Text>
                                    <TouchableOpacity style={styles.playBtn}>
                                        <Image source={imgPlay} style={styles.playIcon} />
                                    </TouchableOpacity>
                                    <Image source={imgChevronRight} style={styles.chevronIcon} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Bottom padding for the fixed button */}
                        <View style={{ height: 100 }} />
                    </ScrollView>

                    {/* ── Fixed Bottom Button ── */}
                    <View style={styles.bottomBar}>
                        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
                            <Text style={styles.submitBtnText}>完成创建</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    );
}

// ─── Styles ────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    // ── Header ──
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.08)',
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    backBtn: {
        width: 42,
        height: 42,
        borderRadius: 21,
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
    headerSpacer: {
        width: 42,
    },
    // ── Tab Switch ──
    tabContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 14,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: ACCENT_BORDER,
        padding: 5,
        backgroundColor: '#000000',
    },
    tabBtn: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 100,
        alignItems: 'center',
    },
    tabBtnActive: {
        backgroundColor: ACCENT,
    },
    tabText: {
        fontSize: 16,
        color: '#9ca3af',
    },
    tabTextActive: {
        color: DARK_TEXT,
        fontWeight: 'bold',
    },
    // ── Scroll ──
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingTop: 4,
    },
    // ── Sections ──
    section: {
        marginBottom: 28,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
        paddingLeft: 5,
    },
    sectionTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        letterSpacing: 0.4,
    },
    requiredStar: {
        fontSize: 18,
        fontWeight: 'bold',
        color: ACCENT,
    },
    generateBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: ACCENT_BORDER,
        borderRadius: 100,
        paddingHorizontal: 14,
        paddingVertical: 8,
        shadowColor: ACCENT,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    sparkleIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    generateText: {
        fontSize: 15,
        color: ACCENT,
        fontWeight: '500',
    },
    // ── Card ──
    card: {
        backgroundColor: '#000000',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: BORDER_GRAY,
        paddingHorizontal: 18,
        paddingVertical: 8,
        overflow: 'hidden',
    },
    formField: {
        paddingVertical: 12,
    },
    fieldLabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 2.5,
        borderLeftColor: ACCENT,
        paddingLeft: 10,
        marginBottom: 10,
    },
    fieldLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    fieldDivider: {
        height: 1,
        backgroundColor: BORDER_GRAY,
        opacity: 0.5,
    },
    inputWrapper: {
        borderWidth: 1,
        borderColor: BORDER_GRAY,
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 12,
    },
    input: {
        fontSize: 15,
        color: '#ffffff',
        padding: 0,
    },
    // ── Textarea ──
    textareaCard: {
        backgroundColor: '#000000',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: BORDER_GRAY,
        padding: 18,
        minHeight: 150,
    },
    textarea: {
        fontSize: 15,
        color: '#ffffff',
        padding: 0,
        minHeight: 120,
    },
    // ── Voice Section ──
    voiceTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
        paddingLeft: 5,
    },
    voiceCard: {
        backgroundColor: '#000000',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: BORDER_GRAY,
        paddingHorizontal: 18,
        paddingVertical: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    voicePlaceholder: {
        fontSize: 15,
        color: '#9ca3af',
    },
    voiceRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    voiceSelected: {
        fontSize: 15,
        color: ACCENT,
        marginRight: 10,
    },
    playBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: ACCENT_DIM,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    playIcon: {
        width: 18,
        height: 18,
        tintColor: ACCENT,
    },
    chevronIcon: {
        width: 10,
        height: 16,
        tintColor: '#9ca3af',
    },
    // ── Bottom Button ──
    bottomBar: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: 'rgba(0,0,0,0.95)',
    },
    submitBtn: {
        backgroundColor: ACCENT,
        borderRadius: 100,
        paddingVertical: 18,
        alignItems: 'center',
        shadowColor: ACCENT,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
    },
    submitBtnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: DARK_TEXT,
        letterSpacing: 2,
    },
});
