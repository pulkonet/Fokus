function dateAndTime(year,mon,date,hour,min,h1,m1)
{
		var hour1=hour;
		if(mon==1||mon==3||mon==5||mon==7||mon==8||mon==10)
		{
			if(date!=31)
			{
				if((hour+min/60+h1+m1/60)<24)
				{
					hour=hour+h1+parseInt((min+m1)/60,10);
					min=(min+m1)%60;
				}else
				{
				    date=date+1;
					hour=parseInt(((h1*60+m1)-((24-(hour+1))*60+min))/60,10);
					min=((h1*60+m1)-((24-(hour1+1))*60+min))%60;
				}
			}else
			{
				if((hour+min/60+h1+m1/60)<24)
				{
					hour=hour+h1+(int)(min+m1)/60;
					min=(min+m1)%60;
				}else
				{
					mon=mon+1;
				    date=1;
				    hour=parseInt(((h1*60+m1)-((24-(hour+1))*60+min))/60,10);
					min=((h1*60+m1)-((24-(hour1+1))*60+min))%60;
				}
			}
		}else
			if(mon==4||mon==6||mon==9||mon==11)
		   {
				if(date!=30)
				{
					if((hour+min/60+h1+m1/60)<24)
					{
						hour=hour+h1+parseInt((min+m1)/60,10);
						min=(min+m1)%60;
					}else
					{
					    date=date+1;
						hour=parseInt(((h1*60+m1)-((24-(hour+1))*60+min))/60,10);
						min=((h1*60+m1)-((24-(hour1+1))*60+min))%60;
					}
				}else
				{
					if((hour+min/60+h1+m1/60)<24)
					{
						hour=hour+h1+parseInt((min+m1)/60,10);
						min=(min+m1)%60;
					}else
					{
						mon=mon+1;
					    date=1;
					    hour=parseInt(((h1*60+m1)-((24-(hour+1))*60+min))/60,10);
						min=((h1*60+m1)-((24-(hour1+1))*60+min))%60;
					}
				}
		   }else
			   if(mon==2)
			   {
				  if(year%4==0)
				   {
				   if(date!=29)
					{
						if((hour+min/60+h1+m1/60)<24)
						{
							hour=hour+h1+parseInt((min+m1)/60,10);
							min=(min+m1)%60;
						}else
						{
						    date=date+1;
							hour=parseInt(((h1*60+m1)-((24-(hour+1))*60+min))/60,10);
							min=((h1*60+m1)-((24-(hour1+1))*60+min))%60;
						}
					}else
					{
						if((hour+min/60+h1+m1/60)<24)
						{
							hour=hour+h1+parseInt((min+m1)/60,10);
							min=(min+m1)%60;
						}else
						{
							mon=mon+1;
						    date=1;
						    hour=parseInt(((h1*60+m1)-((24-(hour+1))*60+min))/60,10);
							min=((h1*60+m1)-((24-(hour1+1))*60+min))%60;
						}
					}
			   }else
			   {
				   if(date!=28)
					{
						if((hour+min/60+h1+m1/60)<24)
						{
							hour=hour+h1+parseInt((min+m1)/60,10);
							min=(min+m1)%60;
						}else
						{
						    date=date+1;
							hour=parseInt(((h1*60+m1)-((24-(hour+1))*60+min))/60,10);
							min=((h1*60+m1)-((24-(hour1+1))*60+min))%60;
						}
					}else
					{
						if((hour+min/60+h1+m1/60)<24)
						{
							hour=hour+h1+parseInt((min+m1)/60,10);
							min=(min+m1)%60;
						}else
						{
							mon=mon+1;
						    date=1;
						    hour=parseInt(((h1*60+m1)-((24-(hour+1))*60+min))/60,10);
							min=((h1*60+m1)-((24-(hour1+1))*60+min))%60;
						}
					}
			   }
	       }else
	    	   if(mon==12)
			   {
				   if(date!=31)
					{
						if((hour+min/60+h1+m1/60)<24)
						{
							hour=hour+h1+parseInt((min+m1)/60,10);
							min=(min+m1)%60;
						}else
						{
						    date=date+1;
							hour=parseInt(((h1*60+m1)-((24-(hour+1))*60+min))/60,10);
							min=((h1*60+m1)-((24-(hour1+1))*60+min))%60;
						}
					}else
					{
						if((hour+min/60+h1+m1/60)<24)
						{
							hour=hour+h1+parseInt((min+m1)/60,10);
							min=(min+m1)%60;
						}else
						{
							year=year+1;
							mon=1;
						    date=1;
						    hour=parseInt(((h1*60+m1)-((24-(hour+1))*60+min))/60,10);
							min=((h1*60+m1)-((24-(hour1+1))*60+min))%60;
						}
					}
	             }
		         return (parseInt(year,10)+" "+parseInt(mon,10)+" "+parseInt(date,10)+" "+parseInt(hour,10)+" "+parseInt(min,10)).toString();
}