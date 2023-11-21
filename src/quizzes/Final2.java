package quizzes;


import java.util.Scanner;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;


public class Final2 {
	
  
    void printMyArray(String[][] mainlist){
     String temptr = "";
     for (int i=0; i<50; i++) {
      for (int j=0; j<2; j++) {
       if (j < 1) 
        temptr = mainlist[i][j];    
       if (j ==1)
        System.out.println(temptr + "         " + mainlist[i][j]);
      } 
     }
    }
    	    	
    void sortByCapital(String[][] mainlist) {
     System.out.println("------------------------------------------");
     System.out.println("SORTED BY CAPITAL IN ALPHABETICAL ORDER");
     System.out.println("------------------------------------------");
     String temptr = "";
     String temptr2 = "";
     for (int i=0; i<50; i++) {
      for (int j=i+1; j<50; j++) {
       
       if (mainlist[j][1].compareTo(mainlist[i][1]) < 0) {
        temptr = mainlist[i][1];
        temptr2 = mainlist[i][0];
        mainlist[i][1] = mainlist[j][1];
        mainlist[i][0] = mainlist[j][0];
        mainlist[j][1] = temptr;
        mainlist[j][0] = temptr2;  
       }
      } 
     }	    
    }

    void EnterStateCapital(String[][] quizlist, Scanner inputscan) {
    double correct = 0.00;
    double totalscore = 0.00;
    System.out.println("------------------------------------------------------------------------------------------------------------------");
    System.out.println("STARTING QUIZ, ENTER CORRESPONDING CAPITAL FOR EACH STATE. RESULTS WILL BE SHOWN AFTER ALL QUESTIONS ARE ANSWERED.");
    System.out.println("quiz is not case sensitive.");
    System.out.println("------------------------------------------------------------------------------------------------------------------");
    for(int i=0;i<50;i++) {
      System.out.println("What is the capital of " + quizlist[i][0] + "?");
      String state = inputscan.nextLine();
      if (state.toLowerCase().equals(quizlist[i][1].toLowerCase())) {
       correct = correct + 1.00;
      }
        if (i == 49) {
    	 totalscore = correct / 50.00;
    	 totalscore = totalscore * 100.00;

    	 System.out.println("----------------------------------------------------------------");
    	 System.out.println("You answered " + correct + " out of the 50 questions correct. Which is " + totalscore + "%.");
    	 System.out.println("----------------------------------------------------------------");
      }
     }
    }

    void hashMap(String[][] hashlist, Scanner inputscan) {
    Map<String, String> newmap = new HashMap<String, String>();     	
     for(int i=0;i<50;i++) {
      newmap.put(hashlist[i][0], hashlist[i][1]);
     }
     System.out.println("");
     System.out.println("");
     System.out.println("");
     System.out.println("");
     System.out.println("");
     System.out.println("---------------------------------------------------");
     System.out.println("Unsorted States and Capitals in Hashmap.(Key,Value)");
     System.out.println("---------------------------------------------------");
     System.out.println(newmap);
     System.out.println("");
     System.out.println("");
     //--------------------------------------------------------------
     //NOW WE SEND HASMAP TO TREE CLASS TO SORT IN ALPHABETICAL ORDER
     //--------------------------------------------------------------
     TreeStorage2 treee = new TreeStorage2();
     Iterator<Map.Entry<String, String>> manager = newmap.entrySet().iterator();
     while(manager.hasNext()) {
      Entry<String,String> entry = manager.next(); 	 
      //System.out.println(entry.getKey() + " " + entry.getValue());
      treee.insert(entry.getKey(),entry.getValue());     
     }
	 System.out.println("-------------------------------------------------");
	 System.out.println("Sorted States and Capitals in Hashmap.(Key,Value)");
	 System.out.println("-------------------------------------------------");	
     treee.print();
     System.out.println("");
     System.out.println("");
     System.out.println("");
     System.out.println("");
     //------------------------------------------------------------------------------------------------------
     //Now we will send user to to method in tree class where you can enter State and it will return capital.
     //------------------------------------------------------------------------------------------------------
 	System.out.println("-----------------------------------------------------------------");	
    System.out.println("Enter a State and program will return Capital(not case sensitive): ");
	System.out.println("-----------------------------------------------------------------");	
    String item = inputscan.nextLine();

     treee.enterState(item);
    }

    
    public static void main(String[] args) {

    //intialize program
    Final2 quiz = new Final2();
 	Scanner scanner = new Scanner(System.in);
    
    //set the array
    System.out.println("------------------------------------------");
    System.out.println("SORTED BY STATE IN ALPHABETICAL ORDER");
    System.out.println("------------------------------------------");
    String[][] mainlist = setArray();
    
    
    //print ordered states and capitals
    quiz.printMyArray(mainlist);
    
    
    //Now we want to sort by capital in alphabetical order using bubble sort
    quiz.sortByCapital(mainlist);
    
    
    //Print the array that we sorted
    quiz.printMyArray(mainlist);
    
    
    //Now we will take the quiz
    String[][] quizlist = setArray();
    quiz.EnterStateCapital(quizlist, scanner);
    
    
    //Now we want to store our array into a Hashmap
    String[][] hashlist = setArray();
    quiz.hashMap(hashlist, scanner);
    scanner.close();
    
    }
         		
    public static String[][] setArray() {
    //setting up two-D array
	String[][] StatesAndCapitals = new String[100][2];
	StatesAndCapitals[0][0] = "Alabama";
	StatesAndCapitals[0][1] = "Montgomery";
	StatesAndCapitals[1][0] = "Alaska";
	StatesAndCapitals[1][1] = "Juneau";
	StatesAndCapitals[2][0] = "Arizona";
	StatesAndCapitals[2][1] = "Phoniex";
	StatesAndCapitals[3][0] = "Arkansas";
	StatesAndCapitals[3][1] = "Little Rock";
	StatesAndCapitals[4][0] = "California";
	StatesAndCapitals[4][1] = "Sacramento";
	StatesAndCapitals[5][0] = "Colorado";
	StatesAndCapitals[5][1] = "Denver";
	StatesAndCapitals[6][0] = "Conneticut";
	StatesAndCapitals[6][1] = "Hartford";
	StatesAndCapitals[7][0] = "Deleware";
	StatesAndCapitals[7][1] = "Dover";
	StatesAndCapitals[8][0] = "Florida";
	StatesAndCapitals[8][1] = "Tallahassee";
	StatesAndCapitals[9][0] = "Gegoria";
	StatesAndCapitals[9][1] = "Atlanta";
	StatesAndCapitals[10][0] = "Hawaii";
	StatesAndCapitals[10][1] = "Honolulu";
	StatesAndCapitals[11][0] = "Idaho";
	StatesAndCapitals[11][1] = "Boise";
	StatesAndCapitals[12][0] = "Illinois";
	StatesAndCapitals[12][1] = "Springfield";
	StatesAndCapitals[13][0] = "Indiana";
	StatesAndCapitals[13][1] = "Indianapolis";
	StatesAndCapitals[14][0] = "Iowa";
	StatesAndCapitals[14][1] = "Des Moines";
	StatesAndCapitals[15][0] = "Kansas";
	StatesAndCapitals[15][1] = "Topeka";
	StatesAndCapitals[16][0] = "Kentucky";
	StatesAndCapitals[16][1] = "Frankfort";
	StatesAndCapitals[17][0] = "Louisiana";
	StatesAndCapitals[17][1] = "Baton Rouge";
	StatesAndCapitals[18][0] = "Maine";
	StatesAndCapitals[18][1] = "Augusta";
	StatesAndCapitals[19][0] = "Maryland";
	StatesAndCapitals[19][1] = "Annapolis";
	StatesAndCapitals[20][0] = "Massachusetts";
	StatesAndCapitals[20][1] = "Boston";
	StatesAndCapitals[21][0] = "Michigan";
	StatesAndCapitals[21][1] = "Lansing";
	StatesAndCapitals[22][0] = "Minnesota";
	StatesAndCapitals[22][1] = "St. Paul";
	StatesAndCapitals[23][0] = "Mississippi";
	StatesAndCapitals[23][1] = "Jackson";
	StatesAndCapitals[24][0] = "Missouri";
	StatesAndCapitals[24][1] = "Jefferson City";
	StatesAndCapitals[25][0] = "Montana";
	StatesAndCapitals[25][1] = "Helena";
	StatesAndCapitals[26][0] = "Nebraska";
	StatesAndCapitals[26][1] = "Lincoln";
	StatesAndCapitals[27][0] = "Nevada";
	StatesAndCapitals[27][1] = "Carson City";
	StatesAndCapitals[28][0] = "New Hampshire";
	StatesAndCapitals[28][1] = "Concord";
	StatesAndCapitals[29][0] = "New Jersey";
	StatesAndCapitals[29][1] = "Trenton";
	StatesAndCapitals[30][0] = "New Mexico";
	StatesAndCapitals[30][1] = "Santa Fe";
	StatesAndCapitals[31][0] = "New York";
	StatesAndCapitals[31][1] = "Albany";
	StatesAndCapitals[32][0] = "North Carolina";
	StatesAndCapitals[32][1] = "Raleigh";
	StatesAndCapitals[33][0] = "North Dakota";
	StatesAndCapitals[33][1] = "Bismarck";
	StatesAndCapitals[34][0] = "Ohio";
	StatesAndCapitals[34][1] = "Columbus";
	StatesAndCapitals[35][0] = "Oklahoma";
	StatesAndCapitals[35][1] = "Oklahoma City";
	StatesAndCapitals[36][0] = "Oregon";
	StatesAndCapitals[36][1] = "Salem";
	StatesAndCapitals[37][0] = "Pennsylvania";
	StatesAndCapitals[37][1] = "Harrisburg";
	StatesAndCapitals[38][0] = "Rhode Island";
	StatesAndCapitals[38][1] = "Providence";
	StatesAndCapitals[39][0] = "South Carolina";
	StatesAndCapitals[39][1] = "Columbia";
	StatesAndCapitals[40][0] = "South Dakota";
	StatesAndCapitals[40][1] = "Pierre";
	StatesAndCapitals[41][0] = "Tennessee";
	StatesAndCapitals[41][1] = "Nashville";
	StatesAndCapitals[42][0] = "Texas";
	StatesAndCapitals[42][1] = "Austin";
	StatesAndCapitals[43][0] = "Utah";
	StatesAndCapitals[43][1] = "Salt Lake City";
	StatesAndCapitals[44][0] = "Vermont";
	StatesAndCapitals[44][1] = "Montpelier";
	StatesAndCapitals[45][0] = "Virginia";
	StatesAndCapitals[45][1] = "Richmond";
	StatesAndCapitals[46][0] = "Washington";
	StatesAndCapitals[46][1] = "Olympia";
	StatesAndCapitals[47][0] = "West Virginia";
	StatesAndCapitals[47][1] = "Charleston";
	StatesAndCapitals[48][0] = "Wisconsin";
	StatesAndCapitals[48][1] = "Madison";
	StatesAndCapitals[49][0] = "Wyoming";
	StatesAndCapitals[49][1] = "Cheyenne";
	
	return StatesAndCapitals;
	    
    }
    
}


class TreeStorage2 {
	// Class Node to store data and the children nodes
	public class Node {
		String data;
		String value;
		Node leftChild;
		Node rightChild;

		Node(String data, String value) {
			this.data = data;
			this.value = value;
			leftChild = rightChild = null;
		}
	}

	Node root;
    
	//INSTERTING INTO THE NODES
	// Tree class constructor
	public TreeStorage2() {
		root = null;
	}

	// Accessible insert method to call the recursive one
	public void insert(String key, String value) {
		root = insertNode(root, key, value);
	}

	// Recursive insert method to define the nodes
	public Node insertNode(Node node, String key, String value) {
		if (node == null) {
			node = new Node(key, value);
			return node;
		}
		if (key.compareTo(node.data) <= 0) {
			node.leftChild = insertNode(node.leftChild, key, value);
		} else if (key.compareTo(node.data) > 0) {
			node.rightChild = insertNode(node.rightChild, key, value);
		}
		return node;
	}
	
	
	//SEARCHING IN PROGRAM FOR STATE ENTERED FROM FINAL CLASS
	public void enterState(String statename) {
    Node findItem = findNode(root, statename);	
    if (findItem == null) {
     System.out.println("Item Not Found");
    }
     else {
      System.out.println("");
      System.out.print("Capital for " + findItem.data + " is " + findItem.value + ".");
	 }
	}
    
	// Recursive find method to explore the children nodes
	public Node findNode(Node node, String key) {
		if (node == null)
			return null;
		if (key.toLowerCase().equals(node.data.toLowerCase())) {
			return node;
		}
		if (key.toLowerCase().compareTo(node.data.toLowerCase()) <= 0) {
			return findNode(node.leftChild, key);
		} else if (key.toLowerCase().compareTo(node.data.toLowerCase()) > 0) {
			return findNode(node.rightChild, key);
		}
		return null;
	}
	
	public void print() {
		printInOrder(root);
	}

	public void printInOrder(Node node) {
		if (node == null)
			return;
		
		printInOrder(node.leftChild);
		System.out.print(node.data + "=" + node.value + ", " );
		printInOrder(node.rightChild);
	 }
    }


