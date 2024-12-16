import helper_flags from './components/helper_flags.js';

// Mock the flags array
jest.mock('./components/FlagImages', () => [
    {src:'./Images/Afghanistan.jpg', value:'Afghanistan'},
    {src:'./Images/Albania.jpg', value:'Albania'},
    {src:'./Images/Algeria.jpg', value:'Algeria'},
    {src:'./Images/Andorra.jpg', value:'Andorra'},
    {src:'./Images/Angola.jpg', value:'Angola'},
    {src:'./Images/Antigua and Barbuda.jpg', value:'Antigua and Barbuda'},
    {src:'./Images/Armenia.jpg', value:'Armenia'},
    {src:'./Images/Australia.jpg', value:'Australia'},
    {src:'./Images/Azerbaijan.jpg', value: 'Azerbaijan'},
    {src:'./Images/Bahama.jpg', value: 'The Bahamas'},
    {src:'./Images/Bahrain.jpg', value:'Bahrain'},
    {src:'./Images/Bangladesh.jpg', value:'Bangladesh'},
    {src:'./Images/Barbados.jpg', value:'Barbados'},
    {src:'./Images/Belarus.jpg', value:'Belarus'},
    {src:'./Images/Belguim.jpg', value:'Belguim'},
    {src:'./Images/Belize.jpg', value:'Belize'},
    {src:'./Images/Benin.jpg', value:'Benin'},
    {src:'./Images/Bolivia.jpg', value:'Bolivia'},
    {src:'./Images/Bosnia and Herzegovina.jpg', value:'Bosnia and Herzegovina'},
    {src:'./Images/Brazil.jpg', value:'Brazil'},
 ]);

 describe('helper_flags', () => {
    it('returns an object from the mocked flags array', () => {
      const result = helper_flags();
      const mockedFlags = [
        {src:'./Images/Afghanistan.jpg', value:'Afghanistan'},
        {src:'./Images/Albania.jpg', value:'Albania'},
        {src:'./Images/Algeria.jpg', value:'Algeria'},
        {src:'./Images/Andorra.jpg', value:'Andorra'},
        {src:'./Images/Angola.jpg', value:'Angola'},
        {src:'./Images/Antigua and Barbuda.jpg', value:'Antigua and Barbuda'},
        {src:'./Images/Armenia.jpg', value:'Armenia'},
        {src:'./Images/Australia.jpg', value:'Australia'},
        {src:'./Images/Azerbaijan.jpg', value: 'Azerbaijan'},
        {src:'./Images/Bahama.jpg', value: 'The Bahamas'},
        {src:'./Images/Bahrain.jpg', value:'Bahrain'},
        {src:'./Images/Bangladesh.jpg', value:'Bangladesh'},
        {src:'./Images/Barbados.jpg', value:'Barbados'},
        {src:'./Images/Belarus.jpg', value:'Belarus'},
        {src:'./Images/Belguim.jpg', value:'Belguim'},
        {src:'./Images/Belize.jpg', value:'Belize'},
        {src:'./Images/Benin.jpg', value:'Benin'},
        {src:'./Images/Bolivia.jpg', value:'Bolivia'},
        {src:'./Images/Bosnia and Herzegovina.jpg', value:'Bosnia and Herzegovina'},
        {src:'./Images/Brazil.jpg', value:'Brazil'},
      ];
      expect(mockedFlags).toContainEqual(result);
    });
   
   
    it('returns an object with valid properties', () => {
      const result = helper_flags();
      expect(result).toHaveProperty('src');
      expect(result).toHaveProperty('value');
      expect(typeof result.src).toBe('string');
      expect(typeof result.value).toBe('string');
    });
   
  
    });
  

