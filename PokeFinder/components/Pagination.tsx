import { Pressable, View, Text } from 'react-native';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled:boolean;
}

const Pagination = ({currentPage, totalPages, onPageChange, disabled}: PaginationProps) => {
  return (
    <View className="flex flex-row justify-center p-2">
      <Pressable
        className="p-2"
        onPress={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1 || disabled}>
        <Text className="text-foreground">&laquo; Previous</Text>
      </Pressable>
      <Text className="p-2 text-foreground">
        Page {currentPage} of {totalPages}
      </Text>
      <Pressable
        className="p-2"
        onPress={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages || disabled}>
        <Text className="text-foreground">Next &raquo;</Text>
      </Pressable>
    </View>
  );
};
export default Pagination;