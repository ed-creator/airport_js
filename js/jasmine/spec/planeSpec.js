describe('Plane', function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
    // spyOn(airport, 'airport')
    airport = jasmine.createSpy('airport')
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
    it('checks the plane is landed', function(){
      plane.land(airport)
      expect(plane.flying).toBe(false)
      expect(plane.airport).toBe(airport)
    });
    it('cannot land a plane, if already landed', function(){
      plane.flying = false
      expect(function() { plane.land(airport) ; }).toThrow(('Plane cannot land: plane already landed'))
    });
    it('returns the planes airport', function(){
      plane.land(airport)
      expect(plane.getAirport()).toEqual(airport)
    });
    it('fails to return airport if plane flying', function(){
      expect(function() { plane.getAirport() ; }).toThrow(('Plane cannot be at an airport: plane already flying'))
    });
  });
});
