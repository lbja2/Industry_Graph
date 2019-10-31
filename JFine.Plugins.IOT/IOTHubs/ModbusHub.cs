﻿/********************************************************************************
**文 件 名:ModbusHub
**命名空间:JFine.Plugins.IOT.IOTHubs
**描    述:
**
**版 本 号:V1.0.0.0
**创 建 人:superjoy
**创建日期:2019-06-26 15:48:25
**修 改 人:
**修改日期:
**修改描述:
**版权所有: ©为之团队
*********************************************************************************/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using JFine.Common.Json;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System.Collections;

namespace JFine.Plugins.IOT.IOTHubs
{
    [HubName("modbus")]
    public class ModbusHub : Hub
    {
        public static Hashtable modbusData = new Hashtable();
        IHubContext hub = GlobalHost.ConnectionManager.GetHubContext<ModbusHub>();

        public void Hello()
        {
            Clients.All.hello();
        }
       /// <summary>
       /// 获取设备数据
       /// </summary>
       /// <param name="deviceId">设备Id</param>
       /// <param name="paraCode">参数编码</param>
        public string GetDeviceData(string deviceId, string paraCode)
        {
            // 返回数据
            if (modbusData.Contains(deviceId + "@_@" + paraCode))
            {
                var data = modbusData[deviceId + "@_@" + paraCode];
                return (new { status = "T", data = data }).ToJson();
            }else
            {
                return (new { status = "F", data = 0 }).ToJson();
            }           

        }

        /// <summary>
        /// 发送设备数据
        /// </summary>
        /// <param name="deviceId">设备Id</param>
        /// <param name="paraType">参数类别0：开关量；1：模拟量</param>
        /// <param name="paraCategory">设备参数内部分类</param>
        /// <param name="paraCode">参数编码</param>
        ///  <param name="data">数值</param>
        public void SendDeviceData(string deviceCode,int paraType,int paraCategory, string paraCode,string data,DateTime dataTime)
        {
            // 客户端调用.返回数据
            hub.Clients.All.ReceiveData(deviceCode, paraType, paraCategory, paraCode, data, dataTime);

        }

        /// <summary>
        /// 发送数量信号
        /// </summary>
        /// <param name="deviceId"></param>
        /// <param name="dataTime"></param>
        public void SendQuantitySignal(string deviceCode, decimal beat, DateTime dataTime)
        {
            // 客户端调用.返回数据
            hub.Clients.All.ReceiveQuantitySignal(deviceCode, beat, dataTime);

        }

        /// <summary>
        /// 发送数量信号
        /// </summary>
        /// <param name="deviceId"></param>
        /// <param name="dataTime"></param>
        public void SendDeviceStatus(string json)
        {
            // 客户端调用.返回数据
            hub.Clients.All.ReceiveDeviceStatus(json);

        }
    }
}