using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dominio.Core.Entities;
using Dominio.MainModule;

namespace Proy_EnglishPlatform.Controllers
{
    public class AlumnoController : Controller
    {
        //
        // GET: /Alumno/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Validar()
        {
            //preguntamos por las cookies
            //request --preguntas al servidor---si existe la cook 
            //Usuario es el nombre de la cookies
            if (Request.Cookies["Usuario"] != null)
            {
                Response.Cookies["Usuario"].Expires = DateTime.Now.AddDays(-1);//expire ayer
            }

            if (Request.Cookies["NombreUsuario"] != null)
            {
                Response.Cookies["NombreUsuario"].Expires = DateTime.Now.AddDays(-1);
            }

            return View();
        }

        [HttpPost]
        public ActionResult Validar(string strusuario, string strpassword)
        {

            IEnumerable<Alumno> objeto = null;

            AlumnoManager manager = new AlumnoManager();

            objeto = manager.LoginUsuario(strusuario, strpassword);

            //Si no se encontró elementos
            if (objeto.Count() == 0)
            {
                return View();
            }
            else
            {
                //validacion exitosa
                //Almacenamos la data en cookies
                Response.Cookies["Usuario"].Value = objeto.ElementAt(0).CodUsu.ToString();
                Response.Cookies["NombreUsuario"].Value = objeto.ElementAt(0).NombreUsu.ToString();

                Response.Cookies["Usuario"].Expires = DateTime.Now.AddDays(1);
                Response.Cookies["NombreUsuario"].Expires = DateTime.Now.AddDays(1);
                // string mes = "bienvenido";
                //  View(mes);
                //Redirecciona al listado de cursos                
                return RedirectToAction("Index", "Home");
            }

        }

        public ActionResult RegistrarAlu()
        {

            return View();
        }
        [HttpPost]
        public ActionResult RegistrarAlu(Alumno obj)
        {

            AlumnoManager manager = new AlumnoManager();
            if (ModelState.IsValid)
            {
                //si pasas la validacion grabas
                manager.RegistrarAlumno(obj);

                //refrescar la data
                return RedirectToAction("ListaAlumno");

            }
            else
            {
                return View(obj);
            }
        }

        public ActionResult ListaAlumno()
        {
            AlumnoManager ma = new AlumnoManager();

            IEnumerable<Alumno> lista = ma.listaAlumno();
            return View(lista);
        }
	}
}