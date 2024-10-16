import {
	ArticleStateType,
	fontColors,
	fontFamilyOptions,
	OptionType,
} from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import { Select } from 'src/ui/select/Select';
// import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';

type ArticleParamsFormProps = {
	setCurrentArticleState: (param: ArticleStateType) => void;
	currentArticleState: ArticleStateType;
};

export const ArticleParamsForm = ({
	currentArticleState,
}: // setCurrentArticleState,
ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	// const rootRef = useRef<HTMLDivElement>(null);
	const [selectArticleState, setSelectArticleState] =
		useState<ArticleStateType>(currentArticleState);

	const handleChange = (key: keyof ArticleStateType, value: OptionType) => {
		setSelectArticleState({ ...selectArticleState, [key]: value });
	};

	// useOutsideClickClose({
	// 	isOpen,
	// 	rootRef,
	// 	onClose: () => setIsOpen(false),
	// 	onChange: setIsOpen,
	// });

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={setIsOpen} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<Select
						selected={selectArticleState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(option) => handleChange('fontFamilyOption', option)}
						title='Шрифт'
					/>

					<Select
						selected={selectArticleState.fontColor}
						options={fontColors}
						onChange={(option) => handleChange('fontColor', option)}
						title='Цвет'
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};

// работаем здесь 1
