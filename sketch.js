var simcash ,cityRank ,home,createFactory,x,y,c;
var factoryCount;
var factoryArray=[]
var database=firebase.database()
var referance=database.ref('simcash')
var value=referance.on("value",readData);
var ref2=database.ref('factoryCount')
var value1=ref2.on("value",readData2);

function setup()
{
	

	c=0
	x=0
	y=80
	createFactory= createButton('create factory');
	createFactory.position(650, 19);

	createFactory.mousePressed(writeFactory);
	
	var sketch=function(p)
{
	p.setup=function()
	{
		p.createCanvas(600,600)
	}
	p.draw=function()
	{
		p.background(0,255,0)
	}
}
var game= new p5(sketch)

	

}
function draw()
{
	createCanvas(600,600+c)
	background(200)
	fill(255)
	push()
	textSize(32);
	text("factory zone",250,30)
	pop()
	text("simcash: "+simcash,300,40)
	text("factories: "+factoryCount,400,40)
	if(factoryCount>0&&factoryArray.length===0)
	{
		for(var i=0;i<factoryCount+1;i++)
		{
			factoryArray.push(new factory(x,y))
	if(x<500)
	{
	x=x+50
	simcash=simcash
	

	}
	else
	{
		x=0
		y=y+50
		simcash=simcash
	
		if(y>500)
		{
			c=c+50

		}
		}
	}
	}
	
	
	drawSprites()
	
	
	
	

}


function readData(data)
{
	simcash=data.val()

}
function readData2(data)
{
	factoryCount=data.val()

}
function writeFactory()
{
	factoryCount++
	database.ref('/').update(
		{
			factoryCount:factoryCount,
		}
	  )
	  factoryArray.push(new factory(10+x,10+y))
	if(simcash>49)
	{
	if(x<500)
	{
	x=x+50
	simcash=simcash-50
	database.ref('/').update(
		{
		  simcash:simcash
	
		}
	  )
	}
	else
	{
		x=0
		y=y+50
		simcash=simcash-50
		if(y>500)
		{
			c=c+50

		}
	
	}
}
else
{
	alert('not enoung simcash')
	factoryArray.pop()
	factoryCount--
	simcash=simcash-50
	

}
	
	  
		
}

