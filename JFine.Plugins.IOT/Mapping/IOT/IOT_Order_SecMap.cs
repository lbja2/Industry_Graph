﻿/********************************************************************************
**文 件 名:IOT_Order_SecMap
**命名空间:JFine.Plugins.IOT.Busines.IOT
**描    述:
**
**
**版 本 号:V1.0.0.0
**创 建 人:此代码由T4模板自动生成
**创建日期:2019-09-30 14:27:44
**修 改 人:
**修改日期:
**修改描述:
**
**
**版权所有: ©为之团队
*********************************************************************************/

using JFine.Plugins.IOT.Domain.Models.IOT;
using JFine.Data.Common;
using System.Data.Entity.ModelConfiguration;
namespace JFine.Plugins.IOT.Mapping.IOT
{	
	/// <summary>
	/// IOT_Order_SecMap
	/// </summary>	
	public class IOT_Order_SecMap:JFEntityTypeConfiguration<IOT_Order_SecEntity>
	{
	   public IOT_Order_SecMap()
	   {
	      this.ToTable("IOT_Order_Sec");
		  this.HasKey(t=>t.Id);
	   }
    }
}
