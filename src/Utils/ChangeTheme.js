export const changeTheme = (theme, rootClasses, cl) => {
    theme === 'dark'
    ? rootClasses.push(cl.dark)
        : rootClasses.push(cl.light);
};