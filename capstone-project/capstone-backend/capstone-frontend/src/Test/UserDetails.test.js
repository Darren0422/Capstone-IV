// Unit test
test('fetch user data', async () => {
    const mockUsername = 'Darren0422';
    const mockUserData = 'Darren0422';
  
    let userData = '';
  
    const API_Url = `https://api.github.com/users/${mockUsername}`
  
      const res = await fetch(API_Url);
      const result = await res.json();
      userData = result.login;
  
      expect(userData).toBe(mockUserData);
  });
  
  