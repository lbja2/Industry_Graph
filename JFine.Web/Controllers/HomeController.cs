﻿using JFine.Busines.SystemManage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using JFine.Web.Base.MVC.Handler;
using JFine.Code.Online;
using JFine.Cache;
using JFine.Domain.Models.SysConfig;
using JFine.Util;
using JFine.Busines.SysConfig;

namespace JFine.Web.Controllers
{
    [HandlerLogin]
    [HandlerSysConfig]
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Index(string token)
        {
            var jfLink = Request["jfLink"] ?? "";
            ViewBag.jfLink = jfLink;

            SysConfigBLL sysConfigBLL = new SysConfigBLL();
            var config = sysConfigBLL.GetCurrentConfig();
            OnlineUserModel onliner = JFine.Code.Online.OnlineUser.Operator.GetCurrent();
            ViewBag.onliner = onliner;
            ViewBag.defaultSkin = config.DefaultSkin;
            ViewBag.background = (config.LoginIndexBackground ?? "").Replace("\\\\", "/").Replace("\\", "/");
            /* CA
            SysManageBLL sysManageBll = new SysManageBLL();
            if (sysManageBll.VerificationToken(token))
            {
                return View();
            }
            else
            {
                return Redirect("/Login/Index");
            }
             * */
            return View();

        }
        [HttpGet]
        public ActionResult Default()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Default2()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Default3()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Default4()
        {
            return View();
        }
        [HttpGet]
        public ActionResult About()
        {
            return View();
        }
    }
}