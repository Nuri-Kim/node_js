const {URL} = require('url');
// url 생성자 활용

const myURL = new URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%9B%94%EB%93%9C%EC%BB%B5+%EC%9D%BC%EC%A0%95');

console.log('searchParams -->',myURL.searchParams) //url의 전체 쿼리 확인

console.log('searchParams.get() -->',myURL.searchParams.get('query')) // 특정 키의 값 가져오기
//color=red,blue,orange
//getAll (): 모든 값 가져오기

console.log('searchParams.has() -->',myURL.searchParams.has('page'));
console.log('searchParams.keys() -->',myURL.searchParams.keys());
console.log('searchParams.values() -->',myURL.searchParams.values());


myURL.searchParams.append('key','value1');
myURL.searchParams.append('key','value2');

console.log('searchParams.getAll() -->',myURL.searchParams.getAll('key'));

myURL.searchParams.set('key','value3')
console.log('searchParams.getAll() -->',myURL.searchParams.getAll('key'));

myURL.searchParams.delete('key');
console.log('searchParams.getAll() -->',myURL.searchParams.getAll('key'));

console.log('myURL.searchParams.toString() --> ',myURL.searchParams.toString())

myURL.search = myURL.searchParams.toString();
