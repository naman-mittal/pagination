import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {User} from '../../constants/types';

interface UserCardProps {
  user: User;
}

const UserCard = ({user}: UserCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.dob}>
        <Text style={styles.text}>{user.date_of_birth}</Text>
      </View>

      <View style={styles.info}>
        <Text style={[styles.text, styles.name]}>
          {user.first_name} {user.last_name}
        </Text>
        <Text style={styles.text}>{user.employment.title}</Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={[styles.text, styles.email]}>
          {`Email : ${user.email}`}
        </Text>
        <Text style={[styles.text, styles.address]}>
          {`Address : ${user.address.city}, ${user.address.country}`}
        </Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    height: 120,
    // borderWidth: 2,
    backgroundColor: colors.surface,
    borderRadius: 10,
    margin: 5,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.onSurface,
  },
  email: {
    color: colors.gray,
    fontSize: 15,
  },
  dob: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  info: {
    flex: 2,
  },
  addressContainer: {flex: 1, justifyContent: 'flex-end'},
  address: {
    fontSize: 15,
    marginTop: 2,
  },
});
