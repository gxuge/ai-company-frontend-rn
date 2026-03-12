import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ImageSourcePropType,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useRouter } from 'expo-router';

// ─── Assets ────────────────────────────────────────────────────────────────
const imgRoleAvatar   = require('../../assets/images/select-role/role_avatar.png');
const imgArrowLeft    = require('../../assets/images/select-role/arrow_left.svg');
const imgRadioEmpty   = require('../../assets/images/select-role/radio_empty.svg');
const imgRadioChecked = require('../../assets/images/select-role/radio_checked.svg');
const imgFabUsers     = require('../../assets/images/select-role/fab_users.svg');

// ─── Mock Data ─────────────────────────────────────────────────────────────
interface RoleItem {
    id: string;
    name: string;
    avatar: ImageSourcePropType;
}

const ROLES: RoleItem[] = [
    { id: '1', name: '赛博朋克黑客', avatar: imgRoleAvatar },
    { id: '2', name: '赛博朋克黑客', avatar: imgRoleAvatar },
    { id: '3', name: '赛博朋克黑客', avatar: imgRoleAvatar },
    { id: '4', name: '赛博朋克黑客', avatar: imgRoleAvatar },
];

// ─── Colors ────────────────────────────────────────────────────────────────
const ACCENT   = 'rgba(155, 254, 3, 0.9)';
const SELECTED_BORDER = '#e9fac8';

// ─── Role Card ─────────────────────────────────────────────────────────────
function RoleCard({
    item,
    selected,
    onPress,
}: {
    item: RoleItem;
    selected: boolean;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity
            style={[styles.card, selected && styles.cardSelected]}
            onPress={onPress}
            activeOpacity={0.75}
        >
            <View style={styles.cardLeft}>
                <Image source={item.avatar} style={styles.avatar} />
                <Text style={styles.roleName}>{item.name}</Text>
            </View>
            <Image
                source={selected ? imgRadioChecked : imgRadioEmpty}
                style={styles.radioIcon}
            />
        </TouchableOpacity>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function SelectRole() {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [selectedId, setSelectedId] = useState<string | null>('4');

    const filtered = ROLES.filter((r) =>
        r.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                {/* ── Header ── */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                        <Image source={imgArrowLeft} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>选择角色</Text>
                    <View style={styles.headerSpacer} />
                </View>

                {/* ── Search Bar ── */}
                <View style={styles.searchRow}>
                    <View style={styles.searchBar}>
                        <Text style={styles.searchIcon}>🔍</Text>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="搜索角色"
                            placeholderTextColor="#909090"
                            value={query}
                            onChangeText={setQuery}
                        />
                    </View>
                </View>

                {/* ── Role List ── */}
                <FlatList
                    data={filtered}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    renderItem={({ item }) => (
                        <RoleCard
                            item={item}
                            selected={selectedId === item.id}
                            onPress={() => setSelectedId(item.id)}
                        />
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    showsVerticalScrollIndicator={false}
                />

                {/* ── Floating Action Button ── */}
                <TouchableOpacity style={styles.fab} activeOpacity={0.85}>
                    <Image source={imgFabUsers} style={styles.fabIcon} />
                </TouchableOpacity>
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
        backgroundColor: '#0a0a0a',
    },
    backBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
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
        width: 44,
    },
    // ── Search ──
    searchRow: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#202020',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.15)',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    searchIcon: {
        fontSize: 16,
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#ffffff',
        padding: 0,
    },
    // ── List ──
    listContent: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 120,
    },
    separator: {
        height: 16,
    },
    // ── Card ──
    card: {
        backgroundColor: '#161616',
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    cardSelected: {
        backgroundColor: '#202020',
        borderWidth: 1,
        borderColor: SELECTED_BORDER,
        shadowColor: 'rgba(152,252,3,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
        marginRight: 16,
    },
    roleName: {
        fontSize: 17,
        color: '#ffffff',
        fontWeight: '400',
    },
    radioIcon: {
        width: 26,
        height: 26,
    },
    // ── FAB ──
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 24,
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        shadowColor: 'rgba(152,252,3,0.5)',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 10,
    },
    fabIcon: {
        width: 36,
        height: 36,
    },
});
