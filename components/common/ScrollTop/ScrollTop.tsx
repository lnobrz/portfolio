type Props = {
  isVisible: boolean;
  scrollToTop: () => void;
};

const ScrollToTop = ({ isVisible, scrollToTop }: Props) => (
  <>
    {isVisible && (
      <div className="scroll-top" onClick={scrollToTop}>
        <i className="bi bi-arrow-up-short"></i>
      </div>
    )}
  </>
);

export default ScrollToTop;
