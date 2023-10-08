// Unit test
test('fetch search data', async () => {
  const mockSearchUsername = 'Darren0422';
  const mockSearchData = 'Darren0422';

  let searchUsername = '';

  const API_Url = `https://api.github.com/users/${mockSearchUsername}`

    const res = await fetch(API_Url);
    const result = await res.json();
    searchUsername = result.login;

    expect(searchUsername).toBe(mockSearchData);
});


