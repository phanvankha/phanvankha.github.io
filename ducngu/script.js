var xhr = new XMLHttpRequest();
xhr.open('GET', '1', true);
xhr.setRequestHeader('Authorization', 'Bearer YOUR_API_KEY');
xhr.onreadystatechange = function () {
  // Xử lý kết quả ở đây
};
xhr.send();