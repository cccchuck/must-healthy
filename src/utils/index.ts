export function toggleShowMode(isDark: boolean): void {
  if (isDark) {
    document.getElementsByTagName('html')[0].classList.add('dark')
  } else {
    document.getElementsByTagName('html')[0].classList.remove('dark')
  }
}
