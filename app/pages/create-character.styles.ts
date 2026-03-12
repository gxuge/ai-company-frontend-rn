import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
// Design is based on 750px wide Figma frame; scale factor for responsive sizing
const scale = width / 375;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    scrollContent: {
        paddingBottom: 40,
    },

    // ─── Header ───
    header: {
        backgroundColor: '#0a0a0a',
        paddingTop: 50,
        paddingBottom: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 50,
        width: 40,
        height: 40,
        borderRadius: 9999,
        backgroundColor: '#232322',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        width: 18,
        height: 17,
        resizeMode: 'contain',
        tintColor: '#fff',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },

    // ─── Tabs ───
    tabsContainer: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 6,
    },
    tabsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 32,
    },
    tabItem: {
        alignItems: 'center',
    },
    tabTextActive: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(155,254,3,0.9)',
        marginBottom: 4,
    },
    tabIndicator: {
        height: 3.5,
        backgroundColor: 'rgba(155,254,3,0.9)',
        borderRadius: 1.5,
        width: 62,
    },
    tabTextInactive: {
        fontSize: 18,
        color: '#e7e7e7',
        marginBottom: 7.5, // compensate for missing indicator
    },

    // ─── 我的图库 Button ───
    galleryBtnRow: {
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        marginTop: 8,
        marginBottom: 16,
    },
    galleryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'rgba(22,22,30,0.6)',
        borderWidth: 1,
        borderColor: '#b2b2b2',
        borderRadius: 12,
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    galleryIcon: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
        tintColor: '#fff',
    },
    galleryText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },

    // ─── Image Card ───
    imageCard: {
        marginHorizontal: 16,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: '#b2b2b2',
        overflow: 'hidden',
        minHeight: 340,
        marginBottom: 16,
    },
    imageCardBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    },
    imageCardOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(22,22,30,0.85)',
    },
    imageCardContent: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 24,
        paddingTop: 32,
        minHeight: 340,
    },
    imageCardSpacer: {
        height: 32,
    },
    imageCardTextGroup: {
        alignItems: 'center',
        paddingTop: 16,
    },
    imageCardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e7e7e7',
        marginBottom: 8,
        textAlign: 'center',
    },
    imageCardSubtitle: {
        fontSize: 14,
        color: '#e7e7e7',
        textAlign: 'center',
        lineHeight: 22,
    },
    imageCardButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        marginTop: 24,
    },
    refButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: 'rgba(22,22,30,0.6)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.45)',
        borderRadius: 12,
        paddingHorizontal: 26,
        paddingVertical: 14,
    },
    refButtonIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        tintColor: '#fff',
    },
    refButtonText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },
    aiButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: 'rgba(22,22,30,0.6)',
        borderWidth: 1,
        borderColor: 'rgba(155,254,3,0.9)',
        borderRadius: 12,
        paddingHorizontal: 24,
        paddingVertical: 12,
        shadowColor: 'rgba(155,254,3,0.2)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 15,
        shadowOpacity: 1,
        elevation: 4,
    },
    aiButtonIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    aiButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgba(155,254,3,0.9)',
    },

    // ─── Style Section ───
    styleSection: {
        marginHorizontal: 16,
        backgroundColor: '#1d1d1d',
        borderWidth: 1,
        borderColor: '#b2b2b2',
        borderRadius: 20,
        padding: 20,
    },
    styleSectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    styleSectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#b3b3b3',
    },
    moreBtn: {
        backgroundColor: 'rgba(178,178,178,0.25)',
        borderWidth: 1,
        borderColor: '#b2b2b2',
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical: 4,
    },
    moreBtnText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
    },
    styleGrid: {
        flexDirection: 'row',
        gap: 16,
    },
    styleItem: {
        alignItems: 'center',
    },
    styleThumbWrapperActive: {
        width: 62,
        height: 62,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: '#fff',
        overflow: 'hidden',
        marginBottom: 8,
    },
    styleThumbWrapperInactive: {
        width: 62,
        height: 62,
        borderRadius: 16,
        borderWidth: 0.75,
        borderColor: 'rgba(255,255,255,0.1)',
        overflow: 'hidden',
        marginBottom: 8,
        opacity: 0.6,
    },
    styleThumb: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    styleLabelActive: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#fff',
    },
    styleLabelInactive: {
        fontSize: 11,
        fontWeight: '500',
        color: 'rgba(255,255,255,0.8)',
    },
});
