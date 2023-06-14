namespace ZeitrechnerCode.Model
{
    public class Zeitrechner
    {
        public DateTime Datum { get; set; }

        public double Tage { 
            get 
            {
                return Math.Round((Datum - DateTime.Now).TotalDays, 2);

            } 
        }

        public double Stunden
        {
            get
            {
                return Math.Round((Datum - DateTime.Now).TotalHours,2);

            }
        }

        public double Minuten
        {
            get
            {
                return Math.Round((Datum - DateTime.Now).TotalMinutes, 2);

            }
        }

        public double Sekunden
        {
            get
            {
                return Math.Round((Datum - DateTime.Now).TotalSeconds);

            }
        }
    }
}
