
class DataApp {
    public static void main(String[] args) {

        int maxSize = 100;
        DataArray arr;
    
        arr = new DataArray(maxSize);

        arr.insert("Evans", "Patty", 24);
        arr.insert("Smith", "Tom", 37);
        arr.insert("Yee", "Bob", 43);
        arr.insert("Adams", "Henry", 29);
        arr.insert("Stimson", "Brad", 54);
        arr.insert("Vang", "Jose", 72);
    
    
        arr.display();

        arr.find("Stimson");
        arr.find("Simpson");
        arr.find("Adams");

        arr.delete("Yee");
        arr.delete("Stimson");

        arr.display();

    }
}

class Person {
    private String lastName;
    private String firstName;
    private int age;

    public Person(String last, String first, int a) {
        lastName = last;
        firstName = first;
        age = a;
    }

    public void displayPerson() {
        System.out.print("FIRST NAME: " + firstName);
        System.out.print(", LAST NAME: " + lastName);
        System.out.println(", AGE: " + age);
    }

    public String getLast() {
        return lastName;
    }
}

class DataArray {
    private Person[] data;
    private int nElems;

    public DataArray(int max) { 
        data = new Person[max];
        nElems = 0;
    }

    public Person find(String searchName) {
        int j;
        for (j=0; j<nElems; j++)
            if(data[j].getLast().equals(searchName))
            break;
        if(j == nElems) {
            System.out.println("Can't find " + searchName);
            return null;
        } else {
            System.out.println("Found " + searchName);
            return data[j];
        }  
    }

    public void insert(String last, String first, int a) {
        data[nElems] = new Person(last, first, a);
        nElems++;
    }

    public boolean delete(String searchName) {
        int j;

        for (j=0; j<nElems; j++)
            if(data[j].getLast().equals(searchName))
                break;
        if(j == nElems)
            return false;
        else 
            for(int k=j; k<nElems; k++)
            data[k] = data[k+1];
                nElems--;
                return true;
    }

    public void display() {
        for (int j=0; j<nElems; j++)
        data[j].displayPerson();
    }
};
