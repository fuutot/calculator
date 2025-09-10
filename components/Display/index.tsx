interface DisplayProps {
  value?: string | number;
  placeholder?: string;
}

const Display: React.FC<DisplayProps> = ({ 
  value = '0', 
  placeholder = 'Enter calculation' 
}) => {
  const displayValue = value?.toString() || '0';
  
  return (
    <div 
      className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 min-h-[60px] flex items-center justify-end font-mono text-2xl text-gray-900 dark:text-gray-100"
      role="textbox"
      aria-label="Calculator display"
      aria-readonly="true"
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
        {displayValue}
      </span>
    </div>
  );
};

export default Display;