import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {Fact} from '../../constants/types';

interface FactCardProps {
  fact: Fact;
}

const FactCard = ({fact}: FactCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{fact.fact}</Text>
    </View>
  );
};

export default FactCard;

const styles = StyleSheet.create({
  card: {
    minHeight: 70,
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 20,
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
    fontSize: 18,
    fontWeight: '600',
    color: colors.onSurface,
  },
});
