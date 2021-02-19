import location from '../location.js';

// very basic test to notify the user if our location data has changed
test('the location data is correct', () => {
  expect(location).toMatchSnapshot();
  expect(location).toHaveLength(4);
  expect(location.map(location => location.name)).toEqual([
    '1213 Apartments',    
  ]);
});

// let's test that each item in the location data has the correct properties
for (let i = 0; i < location.length; i += 1) {
  it(`location[${i}] should have properties (name, type, coordinates)`, () => {
    expect(location[i]).toHaveProperty('name');
    expect(location[i]).toHaveProperty('type');
    expect(location[i]).toHaveProperty('coordinates');
  });
}


