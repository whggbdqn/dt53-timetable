package com.controller;

import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.entity.ClassTableJson2;
import com.entity.Scheduleinfo;
import com.service.ScheduleinfoService;

/*import cn.bdqn.pojo.Schedule;
import cn.bdqn.service.HandleClassesService;
import cn.bdqn.util.GetMonday;
*/
@Controller
public class ExportController {


	@Autowired
	private ScheduleinfoService scheduleinfoService;
	
	@RequestMapping("export")
	public void export(HttpServletResponse response) throws Exception{
		System.out.println("开始导出");
		List<ClassTableJson2> list = scheduleinfoService.getAllSchedule();

		//创建表并命名表
		HSSFWorkbook xssfWorkbook = new HSSFWorkbook();
		//创建一个页
		HSSFSheet createSheet = xssfWorkbook.createSheet("sheet1");
		
		
		  HSSFCellStyle style = xssfWorkbook.createCellStyle();
		 // style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
		//设置列宽
		//createSheet.autoSizeColumn(1, true);
		//createSheet.setColumnWidth(11, 11*256);
		createSheet.setColumnWidth(0, "日期".getBytes().length*5*256);
		HSSFRow firstRow = createSheet.createRow(0);
		firstRow.createCell(0).setCellValue("日期");
		firstRow.createCell(1).setCellValue("教室");
		firstRow.createCell(2).setCellValue("上午8:30-12:30");
		firstRow.createCell(5).setCellValue("下午2：00-6：00");
		firstRow.createCell(8).setCellValue("晚上6:30-8:30");
		HSSFRow secRow = createSheet.createRow(1);
		secRow.createCell(2).setCellValue("班级名称");
		secRow.createCell(3).setCellValue("教师姓名");
		secRow.createCell(4).setCellValue("课程内容");
		secRow.createCell(5).setCellValue("班级名称");
		secRow.createCell(6).setCellValue("教师姓名");
		secRow.createCell(7).setCellValue("课程内容");
		secRow.createCell(8).setCellValue("班级名称");
		secRow.createCell(9).setCellValue("教师姓名");
		secRow.createCell(10).setCellValue("课程内容");
		//合并单元格
		CellRangeAddress cra =new CellRangeAddress(0, 1, 0, 0);// 起始行, 终止行, 起始列, 终止列  
		CellRangeAddress cra1 =new CellRangeAddress(0, 1, 1, 1);
		CellRangeAddress cra2 =new CellRangeAddress(0, 0, 2, 4);
		CellRangeAddress cra3 =new CellRangeAddress(0, 0, 5, 7);
		CellRangeAddress cra4 =new CellRangeAddress(0, 0, 8, 10);
		/*CellRangeAddress cra5 = new CellRangeAddress(2,10,0,0);
		CellRangeAddress cra6 = new CellRangeAddress(11,19,0,0);
		CellRangeAddress cra7 = new CellRangeAddress(20,28,0,0);
		CellRangeAddress cra8 = new CellRangeAddress(29,37,0,0);
		CellRangeAddress cra9 = new CellRangeAddress(38,46,0,0);
		CellRangeAddress cra10 = new CellRangeAddress(47,55,0,0);
		CellRangeAddress cra11 = new CellRangeAddress(55,63,0,0);*/
		createSheet.addMergedRegion(cra);
		createSheet.addMergedRegion(cra1);
		createSheet.addMergedRegion(cra2);
		createSheet.addMergedRegion(cra3);
		createSheet.addMergedRegion(cra4);
		/*createSheet.addMergedRegion(cra5);
		createSheet.addMergedRegion(cra6);
		createSheet.addMergedRegion(cra7);
		createSheet.addMergedRegion(cra8);
		createSheet.addMergedRegion(cra9);
		createSheet.addMergedRegion(cra10);
		createSheet.addMergedRegion(cra11);*/
		
		firstRow.setHeight((short) (25 * 20));// 20 为一个单位长度
		secRow.setHeight((short)(25*20));
	/*	//CellRangeAddress cra5 = new CellRangeAddress(2,10,0,0);
		CellRangeAddress cra6 = new CellRangeAddress(11,19,0,0);
		CellRangeAddress cra7 = new CellRangeAddress(20,28,0,0);
		CellRangeAddress cra8 = new CellRangeAddress(29,37,0,0);
		CellRangeAddress cra9 = new CellRangeAddress(38,46,0,0);
		CellRangeAddress cra10 = new CellRangeAddress(47,55,0,0);
		CellRangeAddress cra11 = new CellRangeAddress(55,63,0,0);
		//createSheet.addMergedRegion(cra5);
		createSheet.addMergedRegion(cra6);
		createSheet.addMergedRegion(cra7);
		createSheet.addMergedRegion(cra8);
		createSheet.addMergedRegion(cra9);
		createSheet.addMergedRegion(cra10);
		createSheet.addMergedRegion(cra11);*/
		
		String current=null;
		List<Integer> list2=new ArrayList<Integer>();
			for(int i=2;i<list.size()+2;i++){
				HSSFRow createRow = createSheet.createRow(i);
				createRow.setHeight((short) (25 * 20));
					if(!list.get(i-2).getDatetime().equals(current)){
						current=list.get(i-2).getDatetime();
						list2.add(i);
					}
				
				createRow.createCell(0).setCellValue(list.get(i-2).getDatetime()+"["+list.get(i-2).getWeekday()+"]");
				createRow.createCell(1).setCellValue(list.get(i-2).getClassroom());
				createRow.createCell(2).setCellValue(list.get(i-2).getClassName_am());
				createRow.createCell(3).setCellValue(list.get(i-2).getTeachername_am());
				createRow.createCell(4).setCellValue(list.get(i-2).getClassInfo_am());
				createRow.createCell(5).setCellValue(list.get(i-2).getClassName_pm());
				createRow.createCell(6).setCellValue(list.get(i-2).getTeachername_pm());
				createRow.createCell(7).setCellValue(list.get(i-2).getClassInfo_pm());
				createRow.createCell(8).setCellValue(list.get(i-2).getClassName_eve());
				createRow.createCell(9).setCellValue(list.get(i-2).getTeachername_eve());
				createRow.createCell(10).setCellValue(list.get(i-2).getClassInfo_eve());
			}
			list2.add(list.size()+2);
			for (int i = 0; i < list2.size()-1; i++) {
				if(list2.get(i+1)-list2.get(i)>1){
					CellRangeAddress cra0 = new CellRangeAddress(list2.get(i),list2.get(i+1)-1,0,0);
					createSheet.addMergedRegion(cra0);
				}
			
				
			}
			
			
		response.setContentType("application/vnd.ms-excel");
		String file = "schedule.xls";
		// 设置文件MIME类型
        response.setContentType("application/vnd.ms-excel");
        // 设置Content-Disposition
        response.setHeader("Content-Disposition", "attachment;filename=\""
                + new String(file.getBytes("utf8"), "ISO8859-1") + "\"");

        OutputStream out = response.getOutputStream();
        xssfWorkbook.write(out);

        xssfWorkbook.close();
        out.flush();
        out.close();

        System.out.println("done");
		
		
		
		
	}//*****************************************************
		

	
}