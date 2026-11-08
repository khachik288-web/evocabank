import { useTranslation } from 'react-i18next';

// Переводит строку-ключ (армянский текст). Хук внутри, поэтому работает и в
// элементах, созданных на уровне модуля, и обновляется при смене языка.
export default function Tr({ children }) {
  const { t } = useTranslation();
  if (typeof children !== 'string') return children;
  const m = children.match(/^(\s*)([\s\S]*?)(\s*)$/);
  return <>{m[1]}{t(m[2])}{m[3]}</>;
}
