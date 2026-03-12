import React from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// ─── Assets ────────────────────────────────────────────────────────────────
const imgRollback = require('../../assets/images/chat-more/rollback.svg');
const imgImage    = require('../../assets/images/chat-more/image.svg');
const imgSettings = require('../../assets/images/chat-more/settings.svg');
const imgUpload   = require('../../assets/images/chat-more/upload.svg');
const imgDanger   = require('../../assets/images/chat-more/danger.svg');

// ─── Types ─────────────────────────────────────────────────────────────────
interface ActionItem {
    key: string;
    label: string;
    icon: ImageSourcePropType;
    borderColor: string;
    iconSize: number;
}

export interface ChatMoreProps {
    onRollback?: () => void;
    onImage?: () => void;
    onSettings?: () => void;
    onShare?: () => void;
    onReport?: () => void;
}

// ─── Data ──────────────────────────────────────────────────────────────────
const ACTIONS: ActionItem[] = [
    { key: 'rollback', label: '回溯', icon: imgRollback, borderColor: 'rgba(34,197,94,0.3)',   iconSize: 36 },
    { key: 'settings', label: '设置', icon: imgSettings, borderColor: 'rgba(156,163,175,0.3)', iconSize: 34 },
    { key: 'share',    label: '分享', icon: imgUpload,   borderColor: 'rgba(238,255,0,0.3)',   iconSize: 38 },
    { key: 'image',    label: '图片', icon: imgImage,    borderColor: 'rgba(96,165,250,0.3)',  iconSize: 38 },
    { key: 'report',   label: '举报', icon: imgDanger,   borderColor: 'rgba(239,68,68,0.3)',   iconSize: 40 },
];

// ─── Main Component ────────────────────────────────────────────────────────
export default function ChatMore({
    onRollback,
    onImage,
    onSettings,
    onShare,
    onReport,
}: ChatMoreProps) {
    const handlers: Record<string, (() => void) | undefined> = {
        rollback: onRollback,
        image:    onImage,
        settings: onSettings,
        share:    onShare,
        report:   onReport,
    };

    const topRow = ACTIONS.slice(0, 3);
    const bottomRow = ACTIONS.slice(3);

    function renderItem(item: ActionItem) {
        return (
            <TouchableOpacity
                key={item.key}
                style={styles.itemContainer}
                onPress={handlers[item.key]}
                activeOpacity={0.7}
            >
                <View style={[styles.iconBtn, { borderColor: item.borderColor }]}>
                    <Image
                        source={item.icon}
                        style={{ width: item.iconSize, height: item.iconSize }}
                    />
                </View>
                <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {topRow.map(renderItem)}
            </View>
            <View style={styles.row}>
                {bottomRow.map(renderItem)}
            </View>
        </View>
    );
}

// ─── Styles ────────────────────────────────────────────────────────────────
const ICON_BTN_SIZE = 64;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0a0a0a',
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#222',
        padding: 28,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 8,
    },
    iconBtn: {
        width: ICON_BTN_SIZE,
        height: ICON_BTN_SIZE,
        borderRadius: 18,
        borderWidth: 1.5,
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 14,
        color: '#ffffff',
        textAlign: 'center',
    },
});
