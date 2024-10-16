// import { useEffect } from 'react';

// type UseOutsideClickClose = {
// 	isOpen: boolean;
// 	onChange: (newValue: boolean) => void;
// 	onClose?: () => void;
// 	rootRef: React.RefObject<HTMLDivElement>;
// 	event?: 'click' | 'mousedown';
// };

// export const useOutsideClickClose = ({
// 	isOpen,
// 	rootRef,
// 	onClose,
// 	onChange,
// 	event = 'mousedown',
// }: UseOutsideClickClose) => {
// 	useEffect(() => {
// 		const handleClick = (event: MouseEvent) => {
// 			const { target } = event;

// 			if (target instanceof Node && !rootRef.current?.contains(target)) {

// 				isOpen && onClose?.();
// 				onChange?.(false);
// 			}
// 			else {
// 				event.stopPropagation();
// 			}

// 		};

// 		window.addEventListener(event, handleClick);

// 		return () => {
// 			window.removeEventListener(event, handleClick);

// 		};
// 	}, [onClose, onChange, isOpen]);
// };

import { useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	onChange: (newValue: boolean) => void;
	onClose?: () => void;
	rootRef: React.RefObject<HTMLDivElement>;
};

export const useOutsideClickClose = ({
	isOpen,
	rootRef,
	onClose,
	onChange,
}: UseOutsideClickClose) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				isOpen && onClose?.();
				onChange?.(false);
			}
		};

		window.addEventListener('mousedown', handleClick);

		return () => {
			window.removeEventListener('mousedown', handleClick);
		};
	}, [onClose, onChange, isOpen]);
};
