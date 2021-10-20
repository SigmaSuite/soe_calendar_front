export const CloseButton = ({ children, onClick }) => (
  <button onClick={onClick} type="button" aria-label="Close">
    {children}
  </button>
);

export const MinimizeButton = ({ children, onClick }) => (
  <button onClick={onClick} type="button" aria-label="Minimize">
    {children}
  </button>
);

export const MaximizeButton = ({ children, onClick }) => (
  <button onClick={onClick} type="button" aria-label="Maximize">
    {children}
  </button>
);

const buttons = {
  CloseButton,
  MinimizeButton,
  MaximizeButton,
};

export default buttons;
