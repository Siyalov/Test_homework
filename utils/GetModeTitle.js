const getModeTitle = (mode) => {
  const modeTitle = mode.toLowerCase();
  switch (modeTitle) {
    case 'completed':
      return [1, 'Выполненные'];
    case 'not_completed':
      return [2, 'Не выполненные'];
    default:
      return [0, 'Все задания '];
  }
};

export default getModeTitle;
