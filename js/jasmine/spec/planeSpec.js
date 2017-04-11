describe('Plane', function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
    // spyOn(airport, 'airport')
  });
  describe('flying', function(){
    it('expects flying to be true ', function(){
      expect(plane.flying).toBe(true)
    });
    it('plane cant take off if flying', function(){
      expect(function() { plane.takeOff() ; }).toThrow(('Plane cannot take off: plane already flying'))
    });
    it('checks if a plane is landed', function(){
      expect(plane.isLanded()).toBe(false)
    });
  });
});
