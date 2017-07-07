using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using EmotionWeb.Models;

namespace EmotionWeb.Controllers
{
    public class EmoEmotionsAPIController : Controller
    {
        private EmotionWebContext db = new EmotionWebContext();

        // GET: EmoEmotionsAPI
        public ActionResult Index()
        {
            var emoEmotions = db.EmoEmotions.Include(e => e.Face);
            return View(emoEmotions.ToList());
        }

        // GET: EmoEmotionsAPI/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            EmoEmotion emoEmotion = db.EmoEmotions.Find(id);
            if (emoEmotion == null)
            {
                return HttpNotFound();
            }
            return View(emoEmotion);
        }

        // GET: EmoEmotionsAPI/Create
        public ActionResult Create()
        {
            ViewBag.EmoFaceId = new SelectList(db.EmoFaces, "Id", "Id");
            return View();
        }

        // POST: EmoEmotionsAPI/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Score,EmoFaceId,EmotionType")] EmoEmotion emoEmotion)
        {
            if (ModelState.IsValid)
            {
                db.EmoEmotions.Add(emoEmotion);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.EmoFaceId = new SelectList(db.EmoFaces, "Id", "Id", emoEmotion.EmoFaceId);
            return View(emoEmotion);
        }

        // GET: EmoEmotionsAPI/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            EmoEmotion emoEmotion = db.EmoEmotions.Find(id);
            if (emoEmotion == null)
            {
                return HttpNotFound();
            }
            ViewBag.EmoFaceId = new SelectList(db.EmoFaces, "Id", "Id", emoEmotion.EmoFaceId);
            return View(emoEmotion);
        }

        // POST: EmoEmotionsAPI/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Score,EmoFaceId,EmotionType")] EmoEmotion emoEmotion)
        {
            if (ModelState.IsValid)
            {
                db.Entry(emoEmotion).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.EmoFaceId = new SelectList(db.EmoFaces, "Id", "Id", emoEmotion.EmoFaceId);
            return View(emoEmotion);
        }

        // GET: EmoEmotionsAPI/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            EmoEmotion emoEmotion = db.EmoEmotions.Find(id);
            if (emoEmotion == null)
            {
                return HttpNotFound();
            }
            return View(emoEmotion);
        }

        // POST: EmoEmotionsAPI/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            EmoEmotion emoEmotion = db.EmoEmotions.Find(id);
            db.EmoEmotions.Remove(emoEmotion);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
