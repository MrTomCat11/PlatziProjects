using EmotionWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EmotionWeb.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            ViewBag.WelcomeMessage = "Hola Mundo";
            ViewBag.ValorEntero = 1;

            return View();
        }

        public ActionResult IndexAlt()
        {
            var modelo = new Home();

            modelo.WelcomeMessage = "Hola Mundo desde el modelo";

            return View(modelo);
        }
    }
}