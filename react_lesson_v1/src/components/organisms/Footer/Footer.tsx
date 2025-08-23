import React from 'react';

interface FooterProps {
  onCheckMaterials?: () => void;
  nextLessonId?: string;
  prevLessonId?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  onCheckMaterials,
  nextLessonId,
  prevLessonId,
  className = '',
}) => {
  return (
    <footer
      className={`flex justify-center gap-12 border-t border-gray-700 bg-black p-4 ${className}`}
    >
      {prevLessonId && (
        <a
          href={`/lessons/${prevLessonId}`}
          className="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 bg-green-100 hover:bg-green-200 text-black focus:ring-green-500 px-4 py-1.5 text-base text-center cursor-pointer w-32"
        >
          Previous
        </a>
      )}
      <button
        onClick={onCheckMaterials}
        className="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 border border-white bg-transparent hover:bg-white hover:text-black text-white focus:ring-white px-4 py-1.5 text-base cursor-pointer w-32"
      >
        Text Book
      </button>
      {nextLessonId ? (
        <a
          href={`/lessons/${nextLessonId}`}
          className="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 bg-cyan-100 hover:bg-cyan-200 text-black focus:ring-cyan-500 px-4 py-1.5 text-base text-center cursor-pointer w-32"
        >
          Next
        </a>
      ) : (
        <a
          href={`/`}
          className="font-medium rounded-md transition-colors focus:outline-none focus:ring-2 bg-cyan-100 hover:bg-cyan-200 text-black focus:ring-cyan-500 px-4 py-1.5 text-base text-center cursor-pointer w-32"
        >
          Back Home
        </a>
      )}
    </footer>
  );
};

export default Footer;
