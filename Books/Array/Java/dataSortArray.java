
class DataSortApp {
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

        System.out.println("Not Sorted");
        arr.display();

        arr.sortedData("Insert", "First Name");

        System.out.println("Sorted");
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

    private String getLast() {
        return lastName;
    }

    private String getFirst() {
        return firstName;
    }

    public int getAge() {
        return age;
    }

    public void displayPerson() {
        System.out.print("FIRST NAME: " + getFirst());
        System.out.print(", LAST NAME: " + getLast());
        System.out.println(", AGE: " + getAge());
    }

    public String getNameInfo(String method) {
        switch (method) {
            case "First Name":
                return getFirst().toLowerCase();
            default:
            case "Last Name":
                return getLast().toLowerCase();
        }
    }
}

class DataArray {
    private Person[] data;
    private int nElems;

    public DataArray(int max) {
        data = new Person[max];
        nElems = 0;
    }

    private void insertSort(String sortedFor) {
        int in, out;

        Boolean sortTer = sortedFor.equals("Age");

        for (out = 1; out < nElems; out++) {
            Person temp = data[out];
            in = out;

            while (sortTer
                    ? in > 0 && data[in - 1].getAge() >= temp.getAge()
                    : in > 0 && data[in - 1].getNameInfo(sortedFor).compareTo(temp.getNameInfo(sortedFor)) > 0) {
                data[in] = data[in - 1];
                --in;
            }

            data[in] = temp;
        }
    }

    private void bubbleSort(String sortedFor) {
        int in, out;

        Boolean sortTer = sortedFor.equals("Age");

        for (out = nElems - 1; out > 0; out--) {
            for (in = 0; in < out; in++) {
                if (sortTer) {
                    if (data[in].getAge() > data[in + 1].getAge()) {
                        Person temp = data[in];
                        data[in] = data[in + 1];
                        data[in + 1] = temp;
                    }
                } else {
                    if (data[in].getNameInfo(sortedFor).compareTo(data[in + 1].getNameInfo(sortedFor)) > 0) {
                        Person temp = data[in];
                        data[in] = data[in + 1];
                        data[in + 1] = temp;
                    }
                }
            }
        }
    }

    private void selectSort(String sortedFor) {
        int out, in, min;

        Boolean sortTer = sortedFor.equals("Age");

        for (out = 0; out < nElems - 1; out++) {
            min = out;
            for (in = out + 1; in < nElems; in++) {
                if (sortTer) {
                    if (data[in].getAge() < data[min].getAge()) {
                        min = in;
                        Person temp = data[out];
                        data[out] = data[min];
                        data[min] = temp;
                    }
                } else {
                    if (data[in].getNameInfo(sortedFor).compareTo(data[min].getNameInfo(sortedFor)) < 0) {
                        min = in;
                        Person temp = data[out];
                        data[out] = data[min];
                        data[min] = temp;
                    }
                }
            }
        }
    }

    public void sortedData(String methodSort, String sortedFor) {
        switch (methodSort) {
            case "Bubble":
                bubbleSort(sortedFor);
                break;
            case "Select":
                selectSort(sortedFor);
            default:
            case "Insert":
                insertSort(sortedFor);
                break;
        }
    }

    public void insert(String last, String first, int age) {
        data[nElems] = new Person(last, first, age);
        nElems++;
    }

    public void display() {
        for (int j = 0; j < nElems; j++)
            data[j].displayPerson();
    }

    public Person find(String field, String searchName) {
        int j;
        Boolean findTer = field.equals("Age");

        for (j = 0; j < nElems; j++)
            if (findTer) {
                if (data[j].getAge() == Integer.parseInt(searchName))
                    break;
            } else {
                if (data[j].getNameInfo(field).equals(searchName.toLowerCase()))
                    break;
            }
        if (j == nElems) {
            System.out.println("Can't find " + searchName);
            return null;
        } else {
            System.out.println("Found " + searchName);
            return data[j];
        }
    }

    public boolean delete(String field, String searchName) {
        int j;

        Boolean findTer = field.equals("Age");

        for (j = 0; j < nElems; j++)
            if (findTer) {
                if (data[j].getAge() == Integer.parseInt(searchName))
                    break;
            } else {
                if (data[j].getNameInfo(field).equals(searchName.toLowerCase()))
                    break;
            }
        if (j == nElems)
            return false;
        else
            for (int k = j; k < nElems; k++)
                data[k] = data[k + 1];
        nElems--;
        return true;
    }
};
