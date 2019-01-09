export default class Input extends Component {
  render() {
    const { label, value, onChangeText, placeholder } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
    );
  }
}
const styles = {
  input: {
    marginVertical: 10,
    borderWidth: 2,
    paddingHorizontal: 15,
    borderRadius: 7,
    borderColor: 'rgba(139, 178, 186, 0.2)',
    height: 60,
    fontSize: 14,
    fontWeight: '600'
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#180456'
  },
  container: {
    marginVertical: 5
  },
}
