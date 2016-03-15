using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularPractice_03142016.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
