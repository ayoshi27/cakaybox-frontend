import { useCallback, useEffect, useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

import styles from "./Dialog.module.scss";

type Props = {
  isOpen: boolean;
  children: React.ReactNode | React.ReactNodeArray;
  onClose: VoidFunction;
};

export const Dialog: React.FC<Props> = ({
  isOpen,
  children,
  onClose,
}): React.ReactElement | null => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect((): void => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) {
      return;
    }
    if (isOpen) {
      if (dialogElement.hasAttribute("open")) {
        return;
      }
      dialogElement.showModal();
    } else {
      if (!dialogElement.hasAttribute("open")) {
        return;
      }
      dialogElement.close();
    }
  }, [isOpen]);

  const handleClickDialog = useCallback((): void => {
    onClose();
  }, [onClose]);

  const handleClickContent = useCallback(
    (event: React.MouseEvent<HTMLDivElement>): void => {
      event.stopPropagation();
    },
    []
  );

  return (
    <RemoveScroll removeScrollBar enabled={isOpen}>
      <dialog
        className={styles["dialog"]}
        ref={dialogRef}
        onClick={handleClickDialog}
      >
        <div className={styles["content"]} onClick={handleClickContent}>
          {children}
        </div>
      </dialog>
    </RemoveScroll>
  );
};
