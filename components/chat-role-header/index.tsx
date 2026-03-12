import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const imgAvatar = require('../../assets/images/chat-role-header/avatar.png');
const imgAddUser = require('../../assets/images/chat-role-header/add_user.svg');
const imgChat = require('../../assets/images/chat-role-header/chat.svg');
const imgMore = require('../../assets/images/chat-role-header/more.svg');

export default function ChatRoleHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                {/* User Info Pill */}
                <View style={styles.userInfoPill}>
                    <View style={styles.userProfile}>
                        <Image source={imgAvatar} style={styles.avatar} />
                        <View style={styles.textContainer}>
                            <Text style={styles.nameText}>林梦</Text>
                            <Text style={styles.handleText}>@莫耀誉</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <Image source={imgAddUser} style={styles.addIcon} />
                    </TouchableOpacity>
                </View>

                {/* Message Count */}
                <View style={styles.messageCountContainer}>
                    <Image source={imgChat} style={styles.chatIcon} />
                    <Text style={styles.messageCountText}>244</Text>
                </View>
            </View>

            {/* More Button */}
            <TouchableOpacity style={styles.moreButton}>
                <Image source={imgMore} style={styles.moreIcon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userInfoPill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 40,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 10,
    },
    userProfile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        justifyContent: 'center',
        marginRight: 15,
    },
    nameText: {
        color: '#c2c2c3',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    handleText: {
        color: '#a8a0a4',
        fontSize: 13,
    },
    addButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    addIcon: {
        width: 18,
        height: 18,
        tintColor: '#ffffff',
    },
    messageCountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    chatIcon: {
        width: 24,
        height: 24,
        position: 'absolute',
        opacity: 0.8,
    },
    messageCountText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 26,
    },
    moreButton: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    moreIcon: {
        width: 28,
        height: 28,
        tintColor: '#ffffff',
    }
});
