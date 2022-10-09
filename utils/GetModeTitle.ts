const getModeTitle = (mode: 'completed' | 'not_completed' | '') => {
  const modeTitle = mode.toLowerCase();
  switch (modeTitle) {
    case 'completed':
      return [1, 'Выполненные'] as const;
    case 'not_completed':
      return [2, 'Не выполненные'] as const;
    default:
      return [0, 'Все задания '] as const;
  }
};

export default getModeTitle;


