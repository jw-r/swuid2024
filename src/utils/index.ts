export const formatDate = (date: Date) => {
  const year = date.getFullYear().toString().slice(-2) // 연도의 마지막 두 자리
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // 월 (0-11이므로 1을 더함)
  const day = date.getDate().toString().padStart(2, '0') // 일

  return `${year}.${month}.${day}`
}
