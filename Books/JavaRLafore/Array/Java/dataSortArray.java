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

        System.out.println("Before Sort");
        arr.display();

        arr.sortedData("Insert", "First Name");

        System.out.println("After Sort");
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

    private String _getLast() {
        return lastName;
    }

    private String _getFirst() {
        return firstName;
    }

    public int getAge() {
        return age;
    }

    public void displayPerson() {
        System.out.print("FIRST NAME: " + _getFirst());
        System.out.print(", LAST NAME: " + _getLast());
        System.out.println(", AGE: " + getAge());
    }

    public String getNameInfo(String field) {
        switch (field) {
            case "First Name":
                return _getFirst().toLowerCase();
            default:
            case "Last Name":
                return _getLast().toLowerCase();
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

    private void bubbleSort(String sortField) {
        int in, out;
        Boolean tField = sortField.equals("Age");

        for (out = nElems - 1; out > 0; out--) {
            for (in = 0; in < out; in++) {
                if (tField
                        ? data[in].getAge() > data[in + 1].getAge()
                        : data[in].getNameInfo(sortField).compareTo(data[in + 1].getNameInfo(sortField)) > 0) {
                    Person temp = data[in];
                    data[in] = data[in + 1];
                    data[in + 1] = temp;
                }
            }
        }
    }

    private void selectSort(String sortField) {
        int out, in, min;
        Boolean tField = sortField.equals("Age");

        for (out = 0; out < nElems - 1; out++) {
            min = out;
            for (in = out + 1; in < nElems; in++) {
                if (tField
                        ? data[in].getAge() < data[min].getAge()
                        : data[in].getNameInfo(sortField).compareTo(data[min].getNameInfo(sortField)) < 0) {
                    min = in;
                    Person temp = data[out];
                    data[out] = data[min];
                    data[min] = temp;
                }
            }
        }
    }

    private void insertSort(String sortField) {
        int in, out;
        Boolean tField = sortField.equals("Age");

        for (out = 1; out < nElems; out++) {
            Person temp = data[out];
            in = out;

            while (tField
                    ? in > 0 && data[in - 1].getAge() >= temp.getAge()
                    : in > 0 && data[in - 1].getNameInfo(sortField).compareTo(temp.getNameInfo(sortField)) > 0) {
                data[in] = data[in - 1];
                --in;
            }

            data[in] = temp;
        }
    }

    public void sortedData(String sortedMethod, String sortedField) {
        switch (sortedMethod) {
            case "Bubble":
                bubbleSort(sortedField);
                break;
            case "Select":
                selectSort(sortedField);
                break;
            default:
            case "Insert":
                insertSort(sortedField);
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

    public Person find(String onField, String value) {
        int j;
        Boolean tField = onField.equals("Age");

        for (j = 0; j < nElems; j++) {
            if (tField
                    ? data[j].getAge() == Integer.parseInt(value)
                    : data[j].getNameInfo(onField).equals(value.toLowerCase()))
                break;
        }

        if (j == nElems) {
            System.out.println("Can't find " + value);
            return null;
        } else {
            System.out.println("Found " + value);
            return data[j];
        }
    }

    public boolean delete(String onField, String value) {
        int j;
        Boolean tField = onField.equals("Age");

        for (j = 0; j < nElems; j++) {
            if (tField
                    ? data[j].getAge() == Integer.parseInt(value)
                    : data[j].getNameInfo(onField).equals(value.toLowerCase()))
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