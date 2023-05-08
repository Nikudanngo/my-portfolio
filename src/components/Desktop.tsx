export const Desktop = (props: { isDarkMode: boolean }) => {
  const { isDarkMode } = props;
  return (
    <img
      src={isDarkMode ? "/desktop_dark.jpg" : "/desktop_light.jpg"}
      alt="desktop_light"
      className="fixed -z-10 h-full"
    />
  );
};
