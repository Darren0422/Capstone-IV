// Unit test
test('fetch repo data', async () => {
    const mockUsername = 'Darren0422';
    const mockUserData = 'Capstone4';
  
    let userData = '';
  
    const API_Url = `https://api.github.com/users/${mockUsername}/repos`
  
      const res = await fetch(API_Url);
      const result = await res.json();
      userData = result[0].name;
  
      expect(userData).toBe(mockUserData);
  });