class MySingleton {
  public:
    static MySingleton* Instance();
  private:
    static MySingleton* _instance;
};
