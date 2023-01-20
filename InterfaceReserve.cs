using samplewebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace samplewebApi.rep
{
    public interface InterfaceReserve
    {
        List<ReserveModel> GetDetails();
        string AddDetails(ReserveModel res);
        string EditDetails(ReserveModel res);
        string DeleteDetail(int S_No);
        List<ReserveModel> GethotelDetails();
    }
    public class Ireserve : InterfaceReserve
    {
        HelloEntities11 reserve = new HelloEntities11();

        public string DeleteDetail(int S_No)
        {
            var result = reserve.Reservations.Where(f => f.S_No == S_No).FirstOrDefault();
            if (result != null)
            {
                reserve.Reservations.Remove(result);

            }
            reserve.SaveChanges();
            return "Deleted";
        }

        public string EditDetails(ReserveModel res)
        {
            var result = reserve.Reservations.Where(f => f.S_No == res.S_No).FirstOrDefault();
            if (result != null)
            {
                result.Hotel = res.Hotel;
                result.Price = res.Price;
                result.Guests = res.Guests;
            }
            reserve.SaveChanges();
            return "Updated";
        }

        public List<ReserveModel> GethotelDetails()
        {
            var listOfReservations = reserve.HotelTables.Select(s => new ReserveModel()
            {
                HotelID=s.HotelID,
                HotelName = s.HotelName,
                Type = s.Type,
                Price = s.Price
            }).ToList<ReserveModel>();
            return listOfReservations;
        }

        string InterfaceReserve.AddDetails(ReserveModel res)
        {
            if (res != null)
            {
                var result = reserve.Reservations.Where(f => f.S_No == res.S_No).FirstOrDefault();
                if (result == null)
                {
                    reserve.Reservations.Add(new Reservation
                    {
                        S_No = res.S_No,
                        Hotel = res.Hotel,
                        Arrival = res.Arrival,
                        Departure = res.Departure,
                        Type = res.Type,
                        Guests = res.Guests,
                        Price = res.Price




                    });
                    reserve.SaveChanges();
                    reserve.Dispose();

                }
                else
                {
                    
                        result.Hotel = res.Hotel;
                        result.Arrival = res.Arrival;
                        result.Departure = res.Departure;
                        result.Type = res.Type;
                        result.Price = res.Price;
                        result.Guests = res.Guests;
              
                }
            }
            reserve.SaveChanges();
            reserve.Dispose();
            return "Inserted";
        }

        List<ReserveModel> InterfaceReserve.GetDetails()
         {
            List<ReserveModel> reservelist = null;
            reservelist = reserve.Reservations.Select(f => new ReserveModel()
            {
                S_No=f.S_No,
                Hotel=f.Hotel,
                Arrival=f.Arrival,
                Departure=f.Departure,
                Type=f.Type,
                Guests=f.Guests,
                Price=f.Price
            }).ToList<ReserveModel>();
            return reservelist;
        }
        
    }
}
