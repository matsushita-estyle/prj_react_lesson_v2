import React from 'react';
import Button from '@/components/atoms/Button';

interface FooterProps {
  onCheckMaterials?: () => void;
  nextLessonId?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  onCheckMaterials,
  nextLessonId,
  className = '',
}) => {
  return (
    <footer
      className={`flex justify-center gap-8 border-t border-gray-700 bg-black p-4 ${className}`}
    >
      <button
        onClick={onCheckMaterials}
        className="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 border border-white bg-transparent hover:bg-white hover:text-black text-white focus:ring-white px-4 py-2 text-base cursor-pointer"
      >
        Text Book
      </button>
      {nextLessonId ? (
        <a
          href={`/lessons/${nextLessonId}`}
          className="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 bg-cyan-100 hover:bg-cyan-200 text-black focus:ring-cyan-500 px-4 py-2 text-base text-center cursor-pointer"
        >
          Next Lesson
        </a>
      ) : (
        <Button variant="primary" disabled>
          最後のレッスンです
        </Button>
      )}
    </footer>
  );
};

export default Footer;
