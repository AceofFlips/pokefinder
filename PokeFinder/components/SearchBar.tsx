import { View, TextInput, Pressable } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar = ({searchTerm,onSearchChange}: SearchBarProps) => {
  const handleClear = () => {
    onSearchChange('');
  }
  return (
    <View className="flex flex-col border border-black bg-white">
      <View className="flex flex-row">
        <Octicons name="search"  />
        <TextInput
          placeholder="Search Pokemon..."
          value={searchTerm}
          onChangeText={onSearchChange}
          className="bg-white"
        />
        {searchTerm && (
          <Pressable
          onPress={handleClear}
          aria-label="Clear search">
            <MaterialIcons name="clear"  />
          </Pressable>
        )}
      </View>
    </View>
  );
};
export default SearchBar;