import React, { useState } from 'react';
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const imgSparkle = require('../../assets/images/edit-sound-text/sparkle.svg');

// ─── Types ─────────────────────────────────────────────────────────────────
export interface EditSoundTextProps {
    visible: boolean;
    initialText?: string;
    maxLength?: number;
    onCancel: () => void;
    onConfirm: (text: string) => void;
    onGenerate?: () => void;
}

const DEFAULT_TEXT =
    '大家好，我是李明。今天非常荣幸能向大家介绍我们最新的市场分析报告。在过去的一个季度里，我们看到了显著的增长趋势...';

// ─── Main Component ────────────────────────────────────────────────────────
export default function EditSoundText({
    visible,
    initialText = DEFAULT_TEXT,
    maxLength = 500,
    onCancel,
    onConfirm,
    onGenerate,
}: EditSoundTextProps) {
    const [text, setText] = useState(initialText);

    function handleConfirm() {
        onConfirm(text);
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            statusBarTranslucent
            onRequestClose={onCancel}
        >
            {/* Backdrop */}
            <TouchableOpacity
                style={styles.backdrop}
                activeOpacity={1}
                onPress={onCancel}
            >
                {/* Panel — stop propagation so tapping inside doesn't close */}
                <View
                    style={styles.panel}
                    onStartShouldSetResponder={() => true}
                >
                    {/* ── Title row ── */}
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>编辑试听文本</Text>
                        <TouchableOpacity style={styles.generateBtn} onPress={onGenerate}>
                            <Image source={imgSparkle} style={styles.sparkleIcon} />
                            <Text style={styles.generateText}>一键生成</Text>
                        </TouchableOpacity>
                    </View>

                    {/* ── Textarea card ── */}
                    <View style={styles.textareaCard}>
                        <TextInput
                            style={styles.textarea}
                            value={text}
                            onChangeText={(v) => setText(v.slice(0, maxLength))}
                            multiline
                            textAlignVertical="top"
                            placeholderTextColor="#6b7280"
                        />

                        {/* Green gradient divider */}
                        <View style={styles.divider} />

                        {/* Char count */}
                        <Text style={styles.charCount}>
                            {text.length}/{maxLength}
                        </Text>
                    </View>

                    {/* ── Buttons ── */}
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
                            <Text style={styles.cancelText}>取消</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
                            <Text style={styles.confirmText}>确认</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}

// ─── Styles ────────────────────────────────────────────────────────────────
const ACCENT     = 'rgba(155, 254, 3, 0.9)';
const ACCENT_DIM = 'rgba(155, 254, 3, 0.2)';

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    panel: {
        width: '100%',
        backgroundColor: '#161616',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: 18,
        paddingVertical: 16,
        gap: 16,
    },
    // ── Title row ──
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    generateBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: ACCENT_DIM,
        borderRadius: 100,
        paddingHorizontal: 14,
        paddingVertical: 8,
        shadowColor: ACCENT,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
    },
    sparkleIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    generateText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#9bfe03',
    },
    // ── Textarea card ──
    textareaCard: {
        backgroundColor: '#222',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: 14,
        paddingTop: 14,
        paddingBottom: 8,
        minHeight: 150,
    },
    textarea: {
        flex: 1,
        minHeight: 100,
        fontSize: 16,
        lineHeight: 26,
        color: '#ffffff',
        padding: 0,
        marginBottom: 8,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(155,254,3,0.3)',
        marginBottom: 6,
    },
    charCount: {
        fontSize: 13,
        color: '#6b7280',
        textAlign: 'right',
    },
    // ── Buttons ──
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
    cancelBtn: {
        flex: 1,
        height: 48,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#d1d5db',
    },
    confirmBtn: {
        flex: 1,
        height: 48,
        borderRadius: 14,
        backgroundColor: ACCENT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3b3f34',
    },
});
