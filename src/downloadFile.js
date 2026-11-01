// Заглушка скачивания: по клику в «Загрузки» падает file.txt (содержимое не важно).
// Когда появятся настоящие файлы — замени вызов на ссылку вида <a href="/files/имя.pdf" download>.
export function downloadTxt(title = '') {
  const content = `${title}\n\nEvocabank — тестовый документ.`;
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'file.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Для onClick у <a>: отменяет переход по "#" и скачивает file.txt
// Использование: <a href="#" onClick={onDownload('Название')}>
export const onDownload = (title) => (e) => {
  e.preventDefault();
  downloadTxt(title);
};
