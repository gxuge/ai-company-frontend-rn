import { Link } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Link href="/pages/Conversation-detail" asChild>
        <Pressable style={styles.jumpButton}>
          <Text style={styles.jumpButtonText}>Go to Body Screen</Text>
        </Pressable>
      </Link>
      <Link href="/pages/quick-login" asChild>
        <Pressable style={styles.jumpButton}>
          <Text style={styles.jumpButtonText}>Go to quick-login</Text>
        </Pressable>
      </Link>
      <Link href="/pages/chat" asChild>
        <Pressable style={styles.jumpButton}>
          <Text style={styles.jumpButtonText}>Go to chat</Text>
        </Pressable>
      </Link>
      <Link href="/pages/role-detail" asChild>
        <Pressable style={styles.jumpButton}>
          <Text style={styles.jumpButtonText}>Go to Role Detail</Text>
        </Pressable>
      </Link>
      <Link href="/pages/create-character" asChild>
        <Pressable style={styles.jumpButton}>
          <Text style={styles.jumpButtonText}>Go to Create Character</Text>
        </Pressable>
      </Link>
      <Link href="/pages/sound-edit" asChild>
        <Pressable style={styles.jumpButton}>
          <Text style={styles.jumpButtonText}>Go to Sound Edit</Text>
        </Pressable>
      </Link>
      <Link href="/pages/mine" asChild>
        <Pressable style={styles.jumpButton}>
          <Text style={styles.jumpButtonText}>Go to Mine</Text>
        </Pressable>
      </Link>
      <Link href="/pages/create-role" asChild>
        <Pressable style={styles.jumpButton}>
          <Text style={styles.jumpButtonText}>Go to Create Role</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  jumpButton: {
    marginTop: 12,
    backgroundColor: '#2563eb',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  jumpButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
